import type { FC } from 'react';
import { Navigate, useOutletContext, useParams } from 'react-router-dom';
import type { Em, H3, Paragraph, Strong, WordBag } from '../../japanese/types';

interface H3Props {
    text: H3['text'];
}

const H3Renderer: FC<H3Props> = ({ text }) => <h3>{text}</h3>;

interface StrongProps {
    text: Strong['text'];
}

const StrongRenderer: FC<StrongProps> = ({ text }) => <strong>{text}</strong>;

interface EmProps {
    text: Em['text'];
}

const EmRenderer: FC<EmProps> = ({ text }) => <em>{text}</em>;

interface PProps {
    text: Paragraph['text'];
}

const PRenderer: FC<PProps> = ({ text }) => {
    if (!Array.isArray(text)) {
        return <p>{text}</p>;
    }

    const renderText = (item: string | Strong | Em, i: number) => {
        if (typeof item === 'string') {
            return item;
        }
        if (item.type === 'strong') {
            return <StrongRenderer key={i} text={item.text} />;
        }
        if (item.type === 'em') {
            return <EmRenderer key={i} text={item.text} />;
        }
        return null;
    };
    return <p>{text.map(renderText)}</p>;
};

export const CultureNotesTab: FC = () => {
    const bag = useOutletContext<WordBag>();
    const bagId = useParams().bagId;

    if (!bag.cultureNotes?.length) {
        return <Navigate to={`/bags/${bagId}/words`} replace />;
    }

    return (
        <article className="prose max-w-none py-4">
            {bag.cultureNotes.map((note, index) => {
                if (note.type === 'h3') {
                    return <H3Renderer key={index} text={note.text} />;
                }
                if (note.type === 'p') {
                    return <PRenderer key={index} text={note.text} />;
                }
                return null;
            })}
        </article>
    );
};
