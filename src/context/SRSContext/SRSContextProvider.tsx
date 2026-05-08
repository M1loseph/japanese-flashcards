import {
    IconBabyCarriage,
    IconBulb,
    IconCertificate,
    IconChessKnight,
    IconDiamond,
    IconInfinity,
    IconMicroscope,
    IconSchool,
    IconSeedling,
    IconTool,
} from '@tabler/icons-react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { type FC, type ReactNode } from 'react';
import dayjs from '../../dayjs';
import { availableWordBags } from '../../japanese';
import type { SRSStage } from '../../types/SpacedRepetitionSystem';
import { shuffleArray } from '../../utils';
import { SRSContext } from './SRSContext';
import { db } from './srsdb';

interface SRSContextProviderProps {
    children: ReactNode;
}

export const SRS_STAGES: SRSStage[] = [
    {
        label: 'Novice',
        icon: IconBabyCarriage,
        waitDuration: dayjs.duration({ hours: 4 }),
    },
    {
        label: 'Beginner',
        icon: IconSeedling,
        waitDuration: dayjs.duration({ hours: 4 }),
    },
    {
        label: 'Apprentice',
        icon: IconSchool,
        waitDuration: dayjs.duration({ hours: 8 }),
    },
    {
        label: 'Practictioner',
        icon: IconTool,
        waitDuration: dayjs.duration({ days: 1 }),
    },
    {
        label: 'Specialist',
        icon: IconMicroscope,
        waitDuration: dayjs.duration({ days: 2 }),
    },
    {
        label: 'Strategist',
        icon: IconChessKnight,
        waitDuration: dayjs.duration({ days: 7 }),
    },
    {
        label: 'Expert',
        icon: IconCertificate,
        waitDuration: dayjs.duration({ days: 14 }),
    },
    {
        label: 'Master',
        icon: IconDiamond,
        waitDuration: dayjs.duration({ months: 1 }),
    },
    {
        label: 'Visionary',
        icon: IconBulb,
        waitDuration: dayjs.duration({ months: 2 }),
    },
    {
        label: 'Sage',
        icon: IconInfinity,
        waitDuration: dayjs.duration({ months: 4 }),
    },
];

const MINIMUM_LEVEL = 0;
const MAXIMUM_LEVEL = SRS_STAGES.length - 1;

const listWordsToReview = async () => {
    const now = new Date();
    const words = await db.wordProgress.where('nextReview').belowOrEqual(now).toArray();
    return words.map((w) => w.wordId);
};

const generateStatistics = async () => {
    const words = await db.wordProgress.toArray();
    const buckets = words.reduce((acc, word) => {
        const level = word.level;
        acc.set(level, (acc.get(level) || 0) + 1);
        return acc;
    }, new Map<number, number>());
    return { buckets };
};

const addNewRandomWords = async (count: number, preferredWordBags?: string[]) => {
    const wordsInProgress = (await db.wordProgress.toArray()).map((w) => w.wordId);
    const allWords = availableWordBags
        .filter((bag) => !preferredWordBags || preferredWordBags.includes(bag.name))
        .flatMap((bag) => bag.words)
        .map((w) => w.id);

    const newWords = allWords.filter((id) => !wordsInProgress.includes(id));
    const wordsToAdd = shuffleArray(newWords).slice(0, count);

    const now = new Date();
    const newProgressEntries = wordsToAdd.map((wordId) => ({
        wordId,
        lastReviewed: undefined,
        nextReview: now,
        level: MINIMUM_LEVEL,
    }));
    await db.wordProgress.bulkAdd(newProgressEntries);
};

const markWordAsReviewedFunction = async (wordId: string, correct: boolean) => {
    const word = await db.wordProgress.get({ wordId });
    if (!word) return;

    let level = word.level;

    if (correct) {
        level = Math.min(level + 1, MAXIMUM_LEVEL);
    } else {
        level = Math.max(level - 1, MINIMUM_LEVEL);
    }

    const now = new Date();
    const timeToNextReview = SRS_STAGES[level].waitDuration.asMilliseconds();
    const nextReview = new Date(now.getTime() + timeToNextReview);

    await db.wordProgress.put({
        wordId: word.wordId,
        lastReviewed: now,
        nextReview,
        level,
    });
};

export const SRSContextProvider: FC<SRSContextProviderProps> = ({ children }) => {
    const wordsToReview = useQuery({
        queryKey: ['wordsToReview'],
        queryFn: listWordsToReview,
    });

    const statistics = useQuery({
        queryKey: ['srsStatistics'],
        queryFn: generateStatistics,
    });

    const addNewRandomWordsMutation = useMutation({
        mutationKey: ['addNewRandomWords'],
        mutationFn: ({ count, preferredWordBags }: { count: number; preferredWordBags?: string[] }) =>
            addNewRandomWords(count, preferredWordBags),
        onSuccess: () => {
            statistics.refetch();
            wordsToReview.refetch();
        },
    });

    const markWordAsReviewedMutation = useMutation({
        mutationKey: ['markWordAsReviewed'],
        mutationFn: ({ wordId, correct }: { wordId: string; correct: boolean }) =>
            markWordAsReviewedFunction(wordId, correct),
        onSuccess: () => {
            statistics.refetch();
            wordsToReview.refetch();
        },
    });

    const addNewRandomWordsMutationWrapper = (count: number, preferredWordBags?: string[]) => {
        addNewRandomWordsMutation.mutate({ count, preferredWordBags });
    };

    const markWordAsReviewedWrapper = (wordId: string, correct: boolean) => {
        markWordAsReviewedMutation.mutate({ wordId, correct });
    };

    return (
        <SRSContext.Provider
            value={{
                wordsToReview,
                addNewRandomWords: addNewRandomWordsMutationWrapper,
                statistics,
                markWordAsReviewed: markWordAsReviewedWrapper,
            }}
        >
            {children}
        </SRSContext.Provider>
    );
};
