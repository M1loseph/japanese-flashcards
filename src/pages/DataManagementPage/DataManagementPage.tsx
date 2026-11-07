import {
    IconAlertTriangle,
    IconArchive,
    IconCircleCheck,
    IconCloudUpload,
    IconDatabase,
    IconDownload,
    IconFileUpload,
} from '@tabler/icons-react';
import { useState, type FC } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card } from '../../components/Card';
import { PageTitle } from '../../components/PageTitle';
import { Toast } from '../../components/Toast';
import { useHardText } from '../../services/HardWordsContext';
import { useAllSRSWords } from '../../services/SRS';
import { ExportedDataSchema, type ExportedData } from '../../types/ExportedData';
import { ScrollablePage } from '../common/ScrollablePage';
import { DataImportDialog } from './DataImportDialog';

const DataManagementPage: FC = () => {
    const [importedApplicationState, setImportedApplicationState] = useState<ExportedData>();
    const [errorToastMessage, setErrorToastMessage] = useState<string>();

    const { data: storedSrsWords, isSuccess } = useAllSRSWords();
    const { getHardTextList } = useHardText();
    const hardText = getHardTextList();

    const handleShowErrorToast = (message: string) => {
        setErrorToastMessage(message);
    };

    const handleDrop = async (files: readonly File[]) => {
        const file = files[0];
        if (file === undefined) return;
        try {
            const mimeType = file.type;
            const decompressedData = await (async () => {
                if (mimeType === 'application/gzip') {
                    return new Response(file.stream().pipeThrough(new DecompressionStream('gzip'))).text();
                } else {
                    return file.text();
                }
            })();
            const parsedData = JSON.parse(decompressedData);
            const applicationState = ExportedDataSchema.parse(parsedData);

            const srsWordIds = applicationState.srsWords.map((word) => word.wordId);
            if (new Set(srsWordIds).size !== srsWordIds.length) {
                handleShowErrorToast('Failed to import data: the backup contains duplicate SRS word IDs.');
                return;
            }

            setImportedApplicationState(applicationState);
        } catch (error) {
            console.error('Failed to import data:', error);
            handleShowErrorToast('Failed to import data. Please check the file format.');
        }
    };

    const handleExportToGZip = async () => {
        if (!storedSrsWords) return;
        const exportedData: ExportedData = {
            version: 1,
            srsWords: storedSrsWords.map((word) => word.toExportedSRSWordModel()),
            hardText,
        };
        const jsonString = JSON.stringify(exportedData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const compressionStream = blob.stream().pipeThrough(new CompressionStream('gzip'));
        const data = await new Response(compressionStream).arrayBuffer();

        const url = URL.createObjectURL(new Blob([data], { type: 'application/gzip' }));

        const link = document.createElement('a');
        link.download = `japanese_flashcards_state_${new Date().toISOString()}.json.gz`;
        link.href = url;
        link.click();

        URL.revokeObjectURL(url);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleDrop,
        accept: {
            'application/gzip': ['.json.gz'],
            'application/json': ['.json'],
        },
        maxFiles: 1,
    });

    const handleCloseDialog = () => {
        setImportedApplicationState(undefined);
    };

    const handleCloseErrorToast = () => {
        setErrorToastMessage(undefined);
    };

    return (
        <ScrollablePage>
            <PageTitle title="Data Management" />
            <p className="text-base-content/70 mb-6">
                Back up and restore your SRS progress and entries marked as hard across devices.
            </p>
            <div className="grid grid-cols-12 gap-4 gap-lg">
                <Card className="col-span-12 lg:col-span-5 group overflow-hidden">
                    <div className="card-body gap-5 z-10">
                        <div className="flex flex-col gap-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center border border-primary/20">
                                <IconDownload size={24} />
                            </div>
                            <h2 className="text-2xl font-bold">Export Data</h2>
                            <p className="text-lg">
                                Download a compressed JSON backup containing your SRS progress and entries marked as
                                hard.
                            </p>
                        </div>
                        <ul className="text-lg">
                            <li className="flex items-center gap-2 text-on-surface-variant">
                                <IconCircleCheck size={20} />
                                <span className="font-label-md text-label-md">SRS Progress and Scheduling</span>
                            </li>
                            <li className="flex items-center gap-2 text-on-surface-variant">
                                <IconCircleCheck size={20} />
                                <span className="font-label-md text-label-md">Entries Marked as Hard</span>
                            </li>
                        </ul>
                        <button
                            disabled={!isSuccess}
                            className="btn btn-primary btn-lg w-full"
                            onClick={handleExportToGZip}
                        >
                            <IconArchive size={20} />
                            Export to GZIP
                        </button>
                    </div>
                    <div className="absolute -right-10 -bottom-10 opacity-5 transition-transform group-hover:scale-110 duration-700">
                        <IconDatabase size={250} />
                    </div>
                </Card>
                <section className="col-span-12 lg:col-span-7 flex flex-col gap-4">
                    <Card>
                        <div className="card-body items-center gap-5 z-10 group">
                            <div className="rounded-full p-4 border border-primary/20">
                                <IconCloudUpload
                                    className="group-hover:scale-110 transition-transform duration-300"
                                    size={32}
                                />
                            </div>
                            <h2 className="text-2xl font-bold">Import Data</h2>
                            <p className="text-lg text-center">Drag and drop your backup file here.</p>
                            <div
                                {...getRootProps()}
                                className="p-6 border border-2 border-primary rounded-lg w-full flex justify-center items-center gap-3 cursor-pointer bg-primary/5 text-primary"
                            >
                                <input {...getInputProps()} />
                                <IconFileUpload size={24} />
                                Upload GZIP or JSON File
                            </div>
                            <p className="font-label-sm text-label-sm text-on-surface-variant/50 italic">
                                Supported format: .json.gz, .json
                            </p>
                        </div>
                    </Card>
                    <Card className="bg-warning/15">
                        <div className="card-body flex-row">
                            <IconAlertTriangle size={48} />
                            <div>
                                <h3 className="text-lg text-error font-bold uppercase">Danger Zone</h3>
                                <p className="text-lg text-on-surface-variant/80">
                                    With merging disabled, importing a data file will{' '}
                                    <span className="text-error font-bold underline">permanently overwrite</span> your
                                    SRS progress and entries marked as hard. We recommend exporting your current data
                                    before importing, or leaving the merge option checked in the confirmation popup to
                                    keep existing entries unless an uploaded SRS level is higher.
                                </p>
                            </div>
                        </div>
                    </Card>
                </section>
            </div>
            {importedApplicationState && storedSrsWords !== undefined && (
                <DataImportDialog
                    hardText={hardText}
                    importedApplicationState={importedApplicationState}
                    currentSrsWords={storedSrsWords}
                    handleCloseDialog={handleCloseDialog}
                    handleShowErrorToast={handleShowErrorToast}
                />
            )}
            <Toast
                open={errorToastMessage !== undefined}
                handleClose={handleCloseErrorToast}
                type="error"
                message={errorToastMessage ?? ''}
            />
        </ScrollablePage>
    );
};

export default DataManagementPage;
