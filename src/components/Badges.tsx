import { WordTypes, type Adjective, type JapaneseWord, type Verb, type WordType } from '../japanese/types';

const createTypeBadge = (type?: WordType): BadgeColorAndText | undefined => {
    if (!type) return;
    let color: string;
    switch (type) {
        case WordTypes.VERB: {
            color = 'badge-error';
            break;
        }
        case WordTypes.NOUN: {
            color = 'badge-info';
            break;
        }
        case WordTypes.ADJECTIVE: {
            color = 'badge-success';
            break;
        }
        case WordTypes.PHRASE: {
            color = 'badge-warning';
            break;
        }
        case WordTypes.PRONOUN: {
            color = 'badge-secondary';
            break;
        }
        case WordTypes.SUFFIX: {
            color = 'badge-accent';
            break;
        }
        case WordTypes.NUMERAL: {
            color = 'badge-primary';
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
            color = 'badge-error';
            text = 'godan (u)';
            break;
        }
        case 'ichidan': {
            color = 'badge-success';
            text = 'ichidan (ru)';
            break;
        }
        case 'irregular': {
            color = 'badge-warning';
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
            color = 'badge-success';
            text = 'i adjective';
            break;
        }
        case 'na-adjective': {
            color = 'badge-warning';
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

type BadgeColorAndText = {
    color: string;
    text: string;
};

interface BadgesProps {
    card: JapaneseWord;
    showAnswer: boolean;
}

export const Badges: React.FC<BadgesProps> = ({ card, showAnswer }) => {
    const badges = [];
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
            {badges.map((badge, index) => (
                <div key={index} className={`badge ${badge.color} badge-lg ml-2 mb-4`}>
                    {badge.text}
                </div>
            ))}
        </div>
    );
};
