import { WordTypes, type Adjective, type JapaneseWord, type Verb, type WordType } from '../japanese/types';

type BadgeColorAndText = {
    color: string;
    text: string;
};

const COLOR_INTENSITY = '300';

const createTypeBadge = (type?: WordType): BadgeColorAndText | undefined => {
    if (!type) return;
    let color: string;
    switch (type) {
        case WordTypes.VERB: {
            color = `bg-red-${COLOR_INTENSITY}`;
            break;
        }
        case WordTypes.NOUN: {
            color = `bg-blue-${COLOR_INTENSITY}`;
            break;
        }
        case WordTypes.ADVERB: {
            color = `bg-gray-${COLOR_INTENSITY}`;
            break;
        }
        case WordTypes.ADJECTIVE: {
            color = `bg-green-${COLOR_INTENSITY}`;
            break;
        }
        case WordTypes.PHRASE: {
            color = `bg-yellow-${COLOR_INTENSITY}`;
            break;
        }
        case WordTypes.PRONOUN: {
            color = `bg-purple-${COLOR_INTENSITY}`;
            break;
        }
        case WordTypes.SUFFIX: {
            color = `bg-pink-${COLOR_INTENSITY}`;
            break;
        }
        case WordTypes.NUMERAL: {
            color = `bg-indigo-${COLOR_INTENSITY}`;
            break;
        }
        case WordTypes.PRE_NOUN_ADJECTIVE: {
            color = `bg-teal-${COLOR_INTENSITY}`;
            break;
        }
        case WordTypes.UNKNOWN: {
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
    };
};

const createVerbTypeBadge = (verbType: Verb['verb_type']): BadgeColorAndText => {
    let color: string;
    let text: string;
    switch (verbType) {
        case 'godan': {
            color = `bg-blue-${COLOR_INTENSITY}`;
            text = 'godan (u)';
            break;
        }
        case 'ichidan': {
            color = `bg-green-${COLOR_INTENSITY}`;
            text = 'ichidan (ru)';
            break;
        }
        case 'irregular': {
            color = `bg-yellow-${COLOR_INTENSITY}`;
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
    };
};

const createAdjectiveTypeBadge = (adjectiveType: Adjective['adjective_type']): BadgeColorAndText => {
    let color: string;
    let text: string;
    switch (adjectiveType) {
        case 'i-adjective': {
            color = `bg-lime-${COLOR_INTENSITY}`;
            text = 'i adjective';
            break;
        }
        case 'na-adjective': {
            color = `bg-yellow-${COLOR_INTENSITY}`;
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
    };
};

interface BadgesProps {
    card: JapaneseWord;
    showAnswer: boolean;
}

export const Badges: React.FC<BadgesProps> = ({ card, showAnswer }) => {
    const badges: BadgeColorAndText[] = [];
    const typeBadge = createTypeBadge(card.type);
    if (typeBadge) {
        badges.push(typeBadge);
    }
    if (card.type === WordTypes.VERB && showAnswer) {
        badges.push(createVerbTypeBadge(card.verb_type));
    }
    if (card.type === WordTypes.ADJECTIVE && showAnswer) {
        badges.push(createAdjectiveTypeBadge(card.adjective_type));
    }
    return (
        <div className="flex flex-row">
            {badges.map((badge) => (
                <div key={badge.text} className={`badge ${badge.color} badge-lg ml-2 mb-4`}>
                    {badge.text}
                </div>
            ))}
        </div>
    );
};
