import { useEffect, useMemo, type FC } from 'react';
import { Navigate, Outlet, useMatches, useNavigate, useParams } from 'react-router-dom';
import { findBagById } from '../../japanese';
import { ScrollablePage } from '../common/ScrollablePage';
import { z } from 'zod';

const TabSchema = z.enum(['words', 'cultureNotes']);

type Tab = z.infer<typeof TabSchema>;

const HandleSchema = z.object({
    tab: TabSchema,
});

const BagPage: FC = () => {
    const bagId = useParams().bagId;
    const bag = useMemo(() => {
        if (!bagId) return undefined;
        return findBagById(bagId);
    }, [bagId]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    const navigate = useNavigate();
    const activeTab = useMatches()
        .map((match) => HandleSchema.safeParse(match.handle))
        .find((result) => result.success)?.data.tab;

    if (!bag || !activeTab) {
        return <Navigate to="/" replace />;
    }

    const hasCultureNotes = !!bag.cultureNotes;

    const handleTabClick = (tab: Tab) => () => {
        navigate(`/bags/${bagId}/${tab}`);
    };

    const handleTabKeyDown = (tab: Tab) => (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navigate(`/bags/${bagId}/${tab}`);
        }
    };

    return (
        <ScrollablePage>
            <div className="p-2 grow">
                <div className="p-2">
                    <h2 className="text-2xl font-semibold">{bag.name}</h2>
                    <h4 className="text-slate-600 text-sm">{bag.words.length} cards</h4>
                </div>
                {hasCultureNotes && (
                    <div role="tablist" className="tabs tabs-bordered my-3">
                        <a
                            role="tab"
                            tabIndex={0}
                            aria-label="Words tab"
                            aria-selected={activeTab === 'words'}
                            className={`tab ${activeTab === 'words' ? 'tab-active' : ''}`}
                            onClick={handleTabClick('words')}
                            onKeyDown={handleTabKeyDown('words')}
                        >
                            Words
                        </a>
                        <a
                            role="tab"
                            tabIndex={0}
                            aria-label="Culture Notes tab"
                            aria-selected={activeTab === 'cultureNotes'}
                            className={`tab ${activeTab === 'cultureNotes' ? 'tab-active' : ''}`}
                            onClick={handleTabClick('cultureNotes')}
                            onKeyDown={handleTabKeyDown('cultureNotes')}
                        >
                            Culture Notes
                        </a>
                    </div>
                )}
                <Outlet context={bag} />
            </div>
        </ScrollablePage>
    );
};

export default BagPage;
