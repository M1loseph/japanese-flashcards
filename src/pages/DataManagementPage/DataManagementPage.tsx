import { IconDownload } from '@tabler/icons-react';
import type { FC } from 'react';
import { PageTitle } from '../../components/PageTitle';
import { ScrollablePage } from '../common/ScrollablePage';

const DataManagementPage: FC = () => {
    return (
        <ScrollablePage>
            <PageTitle title="Data Management" />
            <p className="text-base-content/70 mb-6">
                {' '}
                Take full control of your learning journey. Securely export your progress or migrate data from another
                device.
            </p>
            <div className="grid grid-cols-12 gap-lg">
                <section className="col-span-12 lg:col-span-5 rounded-xl p-5 bg-base-200 flex flex-col justify-between group overflow-hidden relative">
                    <div className="z-10">
                        <div className="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center mb-md border border-primary/20">
                            <IconDownload size={24} />
                        </div>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Export Data</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-xl leading-relaxed">
                            Download a complete archive of your SRS journey. Your ZIP file includes all custom decks,
                            vocabulary progress, streak history, and personal settings in a portable JSON format.
                        </p>
                    </div>
                    <div className="space-y-sm mb-xl relative z-10">
                        <div className="flex items-center gap-2 text-on-surface-variant">
                            <span className="material-symbols-outlined text-sm" data-icon="check_circle">
                                check_circle
                            </span>
                            <span className="font-label-md text-label-md">SRS Scheduling Metadata</span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant">
                            <span className="material-symbols-outlined text-sm" data-icon="check_circle">
                                check_circle
                            </span>
                            <span className="font-label-md text-label-md">Custom Kanji Decks</span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant">
                            <span className="material-symbols-outlined text-sm" data-icon="check_circle">
                                check_circle
                            </span>
                            <span className="font-label-md text-label-md">Audio &amp; Image Resources</span>
                        </div>
                    </div>
                    <button className="relative z-10 w-full py-4 bg-primary text-on-primary font-label-md text-label-md rounded-xl flex items-center justify-center gap-2 group-hover:glow-primary transition-all active:scale-95">
                        <span className="material-symbols-outlined" data-icon="archive">
                            archive
                        </span>
                        Export to ZIP
                    </button>
                    <div className="absolute -right-10 -bottom-10 opacity-5 transition-transform group-hover:scale-110 duration-700">
                        <span className="material-symbols-outlined text-[200px]" data-icon="database">
                            database
                        </span>
                    </div>
                </section>
                {/* <section className="col-span-12 lg:col-span-7 flex flex-col gap-lg">
                    <div className="glass-card rounded-xl p-xl flex-1 border-dashed border-2 border-outline-variant/30 hover:border-primary/50 transition-colors flex flex-col items-center justify-center text-center group" id="drop-zone">
                        <div className="w-16 h-16 bg-secondary-container/30 rounded-full flex items-center justify-center mb-md mb-lg group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-primary text-4xl" data-icon="cloud_upload">cloud_upload</span>
                        </div>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Import Data</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-lg">
                            Drag and drop your Kotoba backup file here, or click to browse your local storage.
                        </p>
                        <button className="px-xl py-3 border border-primary text-primary hover:bg-primary/10 rounded-xl font-label-md text-label-md transition-all active:scale-95 mb-md flex items-center gap-2">
                            <span className="material-symbols-outlined" data-icon="upload_file">upload_file</span>
                            Upload ZIP File
                        </button>
                        <p className="font-label-sm text-label-sm text-on-surface-variant/50 italic">
                            Supported format: .zip, .json (Max 50MB)
                        </p>
                    </div>
                    <div className="glass-card rounded-xl p-md border-error-container/20 flex items-start gap-md bg-error-container/5">
                        <div className="p-sm bg-error-container/20 rounded-lg">
                            <span className="material-symbols-outlined text-error">warning</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-label-md text-label-md text-error font-bold uppercase mb-xs">Danger Zone</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant/80">
                                Importing a data file will <span className="text-error font-bold underline">permanently overwrite</span> your local study history and decks. We recommend performing an export of your current state before proceeding with an import to prevent accidental data loss.
                            </p>
                        </div>
                    </div>
                </section> */}
            </div>
        </ScrollablePage>
    );
};

export default DataManagementPage;
