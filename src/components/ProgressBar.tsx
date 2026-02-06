import { type FC } from 'react';
import { IconClock, IconStack3 } from '@tabler/icons-react';

interface MetadataProps {
    total: number;
    currentIndex: number;
    timeString: string;
    className?: string;
}

const Metadata: FC<MetadataProps> = ({ total, currentIndex, timeString, className }) => {
    return (
        <div className={`flex items-center text-sm text-base-600 ${className}`}>
            <div className="flex flex-row items-center">
                <IconStack3 size={14} />
                <span className="ml-2">Cards left: {total - currentIndex - 1}</span>
            </div>
            <div className="flex flex-row items-center">
                <IconClock size={14} className="ml-2" />
                <span className="ml-2">{timeString}</span>
            </div>
        </div>
    );
};

interface ProgressBarProps {
    wordBags: string[];
    currentIndex: number;
    total: number;
    timeInSeconds: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ wordBags, currentIndex, total, timeInSeconds }) => {
    const progressPercentage = Math.round((currentIndex / total) * 100);

    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    return (
        <div className="w-full space-y-2">
            <div className="flex justify-between">
                <div className="flex-1">
                    <span className="text-xl font-semibold text-primary">{progressPercentage}%</span>
                    <span className="ml-2 mr-2 text-sm">/</span>
                    <span className="text-md font-medium">{wordBags.join(', ')}</span>
                </div>
                <Metadata
                    total={total}
                    currentIndex={currentIndex}
                    timeString={timeString}
                    className="hidden md:flex"
                />
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                <div
                    className="bg-primary h-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                />
            </div>
            <Metadata
                total={total}
                currentIndex={currentIndex}
                timeString={timeString}
                className="justify-between md:hidden"
            />
        </div>
    );
};

export default ProgressBar;
