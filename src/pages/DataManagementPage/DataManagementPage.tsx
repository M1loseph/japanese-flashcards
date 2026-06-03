import {
    IconAlertTriangle,
    IconArchive,
    IconCircleCheck,
    IconCloudUpload,
    IconDatabase,
    IconDownload,
    IconFileUpload,
} from '@tabler/icons-react';
import type { FC } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card } from '../../components/Card';
import { PageTitle } from '../../components/PageTitle';
import { ScrollablePage } from '../common/ScrollablePage';

const DataManagementPage: FC = () => {
    // TODO: implement file import here files: File[]
    const onDrop = () => {};

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <ScrollablePage>
            <PageTitle title="Data Management" />
            <p className="text-base-content/70 mb-6">
                {' '}
                Take full control of your learning journey. Securely export your progress or migrate data from another
                device.
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
                                Download a complete archive of your SRS journey. Your ZIP file includes all hard words
                                and phrases, vocabulary progress in spaced repetition system and the current game in a
                                portable JSON format.
                            </p>
                        </div>
                        <ul className="text-lg">
                            <li className="flex items-center gap-2 text-on-surface-variant">
                                <IconCircleCheck size={20} />
                                <span className="font-label-md text-label-md">SRS Scheduling Metadata</span>
                            </li>
                            <li className="flex items-center gap-2 text-on-surface-variant">
                                <IconCircleCheck size={20} />
                                <span className="font-label-md text-label-md">Custom Kanji Decks</span>
                            </li>
                            <li className="flex items-center gap-2 text-on-surface-variant">
                                <IconCircleCheck size={20} />
                                <span className="font-label-md text-label-md">Audio &amp; Image Resources</span>
                            </li>
                        </ul>
                        <button className="btn btn-primary btn-lg w-full">
                            <IconArchive size={20} />
                            Export to ZIP
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
                                className="p-6 border border-2 border-primary rounded-lg w-100 flex justify-center items-center gap-3 cursor-pointer bg-primary/5 text-primary"
                            >
                                <input {...getInputProps()} />
                                <IconFileUpload size={24} />
                                Upload ZIP or JSON File
                            </div>
                            <p className="font-label-sm text-label-sm text-on-surface-variant/50 italic">
                                Supported format: .zip, .json
                            </p>
                        </div>
                    </Card>
                    <Card className="bg-warning/15">
                        <div className="card-body flex-row">
                            <IconAlertTriangle size={48} />
                            <div>
                                <h3 className="text-lg text-error font-bold uppercase">Danger Zone</h3>
                                <p className="text-lg text-on-surface-variant/80">
                                    Importing a data file will{' '}
                                    <span className="text-error font-bold underline">permanently overwrite</span> your
                                    local study progress and user settings. We recommend performing an export of your
                                    current state before proceeding with an import to prevent accidental data loss.
                                </p>
                            </div>
                        </div>
                    </Card>
                </section>
            </div>
        </ScrollablePage>
    );
};

export default DataManagementPage;
