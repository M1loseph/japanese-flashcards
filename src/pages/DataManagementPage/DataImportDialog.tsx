import { useQueryClient } from '@tanstack/react-query';
import { useState, type FC } from 'react';
import { useHardText } from '../../services/HardWordsContext';
import { useReplaceSRSWords } from '../../services/SRS/srsHooks';
import type { ExportedData } from '../../types/ExportedData';
import type { WordLearningProgress } from '../../types/SpacedRepetitionSystem';

interface DataImportDialogProps {
    importedApplicationState: ExportedData;
    srsWords: WordLearningProgress[];
    hardText: string[];
    handleCloseDialog: () => void;
    handleShowErrorToast: () => void;
}

export const DataImportDialog: FC<DataImportDialogProps> = ({
    importedApplicationState,
    srsWords,
    hardText,
    handleCloseDialog,
    handleShowErrorToast,
}) => {
    const [disabledButtons, setDisabledButtons] = useState(false);
    const queryClient = useQueryClient();
    const { overrideHardTextList } = useHardText();
    const replaceSRSWords = useReplaceSRSWords(queryClient);

    const handleImportData = async () => {
        setDisabledButtons(true);
        try {
            await replaceSRSWords.mutateAsync(importedApplicationState.srsWords);
            overrideHardTextList(importedApplicationState.hardText);
            handleCloseDialog();
        } catch (error) {
            console.error('Failed to import data:', error);
            handleShowErrorToast();
        } finally {
            setDisabledButtons(false);
        }
    };

    return (
        <dialog className="modal modal-open">
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-4">Import Data</h3>
                <p className="py-4">
                    Are you sure you want to import this data? Your current SRS progress and entries marked as hard will
                    be permanently overwritten.
                </p>
                <p>
                    You will lose <b>{srsWords.length}</b> SRS entries and{' '}
                    <b>{importedApplicationState.srsWords.length}</b> entries will be imported.
                </p>
                <p>
                    You will lose <b>{hardText.length}</b> hard text entries and{' '}
                    <b>{importedApplicationState.hardText.length}</b> entries will be imported.
                </p>
                <div className="modal-action flex flex-col md:flex-row">
                    <button className="btn" onClick={handleCloseDialog} disabled={disabledButtons}>
                        Don't import
                    </button>
                    <button className="btn btn-warning" onClick={handleImportData} disabled={disabledButtons}>
                        I know what I'm doing, import data
                    </button>
                </div>
            </div>
            <div className="modal-backdrop" onClick={handleCloseDialog}></div>
        </dialog>
    );
};
