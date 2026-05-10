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
import dayjs from '../../dayjs';
import type { SRSStage } from '../../types/SpacedRepetitionSystem';

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
        label: 'Practitioner',
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

export const MINIMUM_LEVEL = 0;
export const MAXIMUM_LEVEL = SRS_STAGES.length - 1;
