import type { Icon } from '@tabler/icons-react';
import type { Duration } from 'dayjs/plugin/duration';

export interface WordLearningProgress {
    wordId: string;
    lastReviewed?: Date;
    nextReview: Date;
    level: number;
}

export interface SRSStage {
    label: string;
    waitDuration: Duration;
    icon: Icon;
}
