import { useMemo, useState, type FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { findBagById } from '../japanese';
import { IconZoom } from '@tabler/icons-react';
import { toRomaji } from 'wanakana';
import { Badges } from '../components/Badges';

const BagPage: FC = () => {
    const [searchText, setSearchText] = useState<string>('');
    const bagId = useParams().bagId;
    const bag = useMemo(() => {
        if (!bagId) return undefined;
        return findBagById(bagId);
    }, [bagId]);
    if (!bag) {
        return <Navigate to="/" replace />;
    }
    const words = bag.words.filter((word) => {
        if (!searchText) return true;
        const wordRomaji = toRomaji(word.jp_pronunciation || word.jp);
        if (wordRomaji.includes(searchText)) return true;
        if (word.en.toLocaleLowerCase().includes(searchText)) return true;
        return false;
    });
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value.toLowerCase());
    };
    return (
        <div className="p-2">
            <div className="p-2">
                <h2 className="text-2xl font-semibold">{bag.name}</h2>
                <h4 className="text-slate-600 text-sm">{bag.words.length} cards</h4>
            </div>
            <div className="my-3">
                <label className="input w-full">
                    <IconZoom size={16} className="opacity-50" />
                    <input
                        value={searchText}
                        type="search"
                        className="grow"
                        placeholder="Search by reading or meaning"
                        onChange={handleSearchChange}
                    />
                </label>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {words.map((word) => (
                    <div key={word.jp + word.en} className="card card-xs bg-base-100 shadow-md">
                        <div className="card-body">
                            <h3 className="text-lg text-primary font-semibold text-center w-full">{word.jp}</h3>
                            <hr className="my-1 border-slate-300 border-dashed" />
                            {word.jp_pronunciation && <p className="text-sm text-semibold">{word.jp_pronunciation}</p>}
                            <p className="text-sm text-slate-600 italic">{word.en}</p>
                            <Badges size="sm" card={word} showAnswer />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BagPage;
