import { useState, type ChangeEvent, type FC } from 'react';
import { useHardText } from '../../services/HardWordsContext';
import { planSRSImportMerge, WordLearningProgress } from '../../services/SRS';
import { useMergeSRSWords, useReplaceSRSWords } from '../../services/SRS/srsHooks';
import type { ExportedData } from '../../types/ExportedData';

interface DataImportDialogProps {
    importedApplicationState: ExportedData;
    currentSrsWords: readonly WordLearningProgress[];
    hardText: readonly string[];
    handleCloseDialog: () => void;
    handleShowErrorToast: (message: string) => void;
}

export const DataImportDialog: FC<DataImportDialogProps> = ({
    importedApplicationState,
    currentSrsWords,
    hardText,
    handleCloseDialog,
    handleShowErrorToast,
}) => {
    const [disabledButtons, setDisabledButtons] = useState(false);
    const [mergeWithCurrentState, setMergeWithCurrentState] = useState(true);
    const { overrideHardTextList } = useHardText();
    const mergeSRSWords = useMergeSRSWords();
    const replaceSRSWords = useReplaceSRSWords();
    const mergePlan = planSRSImportMerge(currentSrsWords, importedApplicationState.srsWords);
    const importButtonClassName = mergeWithCurrentState ? 'btn btn-primary' : 'btn btn-warning';

    const handleMergeWithCurrentStateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMergeWithCurrentState(event.target.checked);
    };

    const handleImportData = async () => {
        setDisabledButtons(true);
        try {
            const importedSRSWords = importedApplicationState.srsWords.map((word) => new WordLearningProgress(word));
            if (mergeWithCurrentState) {
                await mergeSRSWords.mutateAsync(importedSRSWords);
                overrideHardTextList([...new Set([...hardText, ...importedApplicationState.hardText])]);
            } else {
                await replaceSRSWords.mutateAsync(importedSRSWords);
                overrideHardTextList(importedApplicationState.hardText);
            }
            handleCloseDialog();
        } catch (error) {
            console.error('Failed to import data:', error);
            handleShowErrorToast('Failed to import data. Please try again.');
        } finally {
            setDisabledButtons(false);
        }
    };

    return (
        <dialog className="modal modal-open">
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-4">Import Data</h3>
                <label className="label cursor-pointer justify-start gap-3">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                        checked={mergeWithCurrentState}
                        onChange={handleMergeWithCurrentStateChange}
                        disabled={disabledButtons}
                    />
                    <span className="label-text">Merge with current data</span>
                </label>
                <p className="py-4">
                    {mergeWithCurrentState
                        ? 'Current data will be preserved. Hard entries will be combined, and SRS entries will be added or upgraded when the uploaded level is higher.'
                        : 'Are you sure you want to import this data? Your current SRS progress and entries marked as hard will be permanently overwritten.'}
                </p>
                {mergeWithCurrentState ? (
                    <div>
                        <p className="font-semibold">SRS merge summary</p>
                        <ul className="list-disc pl-5">
                            <li>
                                Unchanged in current database: <b>{mergePlan.unchangedCount}</b>
                            </li>
                            <li>
                                Existing entries upgraded from backup: <b>{mergePlan.mergedWords.length}</b>
                            </li>
                            <li>
                                New entries added: <b>{mergePlan.addedWords.length}</b>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <p>
                        You will lose <b>{currentSrsWords.length}</b> SRS entries and{' '}
                        <b>{importedApplicationState.srsWords.length}</b> entries will be imported.
                    </p>
                )}
                <p>
                    {mergeWithCurrentState ? (
                        <>
                            <b>{hardText.length}</b> current hard text entries and{' '}
                            <b>{importedApplicationState.hardText.length}</b> uploaded entries will be combined.
                        </>
                    ) : (
                        <>
                            You will lose <b>{hardText.length}</b> hard text entries and{' '}
                            <b>{importedApplicationState.hardText.length}</b> entries will be imported.
                        </>
                    )}
                </p>
                <div className="modal-action flex flex-col md:flex-row">
                    <button className="btn" onClick={handleCloseDialog} disabled={disabledButtons}>
                        Don't import
                    </button>
                    <button className={importButtonClassName} onClick={handleImportData} disabled={disabledButtons}>
                        {mergeWithCurrentState ? 'Merge data' : "I know what I'm doing, import data"}
                    </button>
                </div>
            </div>
            <div className="modal-backdrop" onClick={handleCloseDialog}></div>
        </dialog>
    );
};
