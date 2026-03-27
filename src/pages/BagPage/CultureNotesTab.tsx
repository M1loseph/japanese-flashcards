import type { FC } from 'react';
import { Navigate, useOutletContext, useParams } from 'react-router-dom';
import type { WordBag } from '../../japanese/types';

export const CultureNotesTab: FC = () => {
    const bag = useOutletContext<WordBag>();
    const bagId = useParams().bagId;

    if (!bag.cultureNotes) {
        return <Navigate to={`/bags/${bagId}/words`} replace />;
    }

    return <article className="prose max-w-none py-4">{bag.cultureNotes}</article>;
};
