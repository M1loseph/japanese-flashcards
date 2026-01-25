import { IconClock, IconStack3 } from '@tabler/icons-react';

interface MetadataProps {
    total: number;
    current: number;
    timeString: string;
    className?: string;
}

const Metadata = ({ total, current, timeString, className }: MetadataProps) => {
    return (
        <div className={`flex items-center text-sm text-base-600 ${className}`}>
            <div className="flex flex-row items-center">
                <IconStack3 size={14} />
                <span className="ml-2">Cards left: {total - current}</span>
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
    current: number;
    total: number;
    timeInSeconds: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ wordBags, current, total, timeInSeconds }) => {
    const progressPercentage = Math.round((current / total) * 100);

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
                {Metadata({ total, current, timeString, className: 'hidden md:flex' })}
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                <div
                    className="bg-primary h-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                />
            </div>
            {Metadata({ total, current, timeString, className: 'justify-between md:hidden' })}
        </div>
    );
};

export default ProgressBar;
