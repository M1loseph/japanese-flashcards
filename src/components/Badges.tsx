import { type Adjective, type JapaneseWord, type Verb, type WordType } from '../japanese/types';

type BadgeMetadata = {
    color: string;
    text: string;
    show: boolean;
};

const createTypeBadge: (type?: WordType) => BadgeMetadata | undefined = (type) => {
    if (!type) return;
    let color: string;
    switch (type) {
        case 'verb': {
            color = `bg-red-300/75`;
            break;
        }
        case 'noun': {
            color = `bg-blue-300/75`;
            break;
        }
        case 'adverb': {
            color = `bg-gray-300/75`;
            break;
        }
        case 'adjective': {
            color = `bg-green-300/75`;
            break;
        }
        case 'phrase': {
            color = `bg-yellow-300/75`;
            break;
        }
        case 'pronoun': {
            color = `bg-purple-300/75`;
            break;
        }
        case 'suffix': {
            color = `bg-pink-300/75`;
            break;
        }
        case 'numeral': {
            color = `bg-indigo-300/75`;
            break;
        }
        case 'pre-noun-adjective': {
            color = `bg-teal-300/75`;
            break;
        }
        case 'particle': {
            color = `bg-orange-300/75`;
            break;
        }
        case 'unknown': {
            return;
        }
        default: {
            const _exhaustiveCheck: never = type;
            return _exhaustiveCheck;
        }
    }
    return {
        color,
        text: type,
        show: true,
    };
};

const createVerbTypeBadge: (verbType: Verb['verb_type'], show: boolean) => BadgeMetadata = (verbType, show) => {
    let color: string;
    let text: string;
    switch (verbType) {
        case 'godan': {
            color = `bg-blue-300/75`;
            text = 'godan (u)';
            break;
        }
        case 'ichidan': {
            color = `bg-green-300/75`;
            text = 'ichidan (ru)';
            break;
        }
        case 'irregular': {
            color = `bg-yellow-300/75`;
            text = 'irregular';
            break;
        }
        default: {
            const _exhaustiveCheck: never = verbType;
            return _exhaustiveCheck;
        }
    }
    return {
        color,
        text,
        show,
    };
};

const createAdjectiveTypeBadge: (adjectiveType: Adjective['adjective_type'], show: boolean) => BadgeMetadata = (adjectiveType, show) => {
    let color: string;
    let text: string;
    switch (adjectiveType) {
        case 'i-adjective': {
            color = `bg-lime-300/75`;
            text = 'i adjective';
            break;
        }
        case 'na-adjective': {
            color = `bg-yellow-300/75`;
            text = 'na adjective';
            break;
        }
        default: {
            const _exhaustiveCheck: never = adjectiveType;
            return _exhaustiveCheck;
        }
    }
    return {
        color,
        text,
        show,
    };
};

const createHasKanjiBadge: () => BadgeMetadata = () => {
    return {
        color: 'bg-sky-300/75',
        text: 'kanji',
        show: true,
    };
};

interface BadgesProps {
    card: JapaneseWord;
    showAnswer: boolean;
}

export const Badges: React.FC<BadgesProps> = ({ card, showAnswer }) => {
    const badges: BadgeMetadata[] = [];
    const typeBadge = createTypeBadge(card.type);
    if (typeBadge) {
        badges.push(typeBadge);
    }
    if (card.jp_pronunciation) {
        badges.push(createHasKanjiBadge());
    }
    if (card.type === 'verb') {
        badges.push(createVerbTypeBadge(card.verb_type, showAnswer));
    }
    if (card.type === 'adjective') {
        badges.push(createAdjectiveTypeBadge(card.adjective_type, showAnswer));
    }
    return (
        <div className="flex flex-row">
            {badges.map((badge) => (
                <div key={badge.text} className={`badge ${badge.color} badge-lg ml-2 mb-4 transition-all duration-200 ${badge.show ? 'opacity-100' : 'opacity-0'}`}>
                    {badge.text}
                </div>
            ))}
        </div>
    );
};
