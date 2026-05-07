export interface WordLearningProgress {
    wordId: string;
    lastReviewed?: Date;
    nextReview: Date;
    level: number;
}
