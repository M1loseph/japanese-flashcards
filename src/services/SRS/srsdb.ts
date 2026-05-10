import { Dexie, type EntityTable } from 'dexie';
import type { WordLearningProgress } from '../../types/SpacedRepetitionSystem';

const db = new Dexie('JapaneseFlashcardsDB') as Dexie & {
    wordProgress: EntityTable<WordLearningProgress, 'wordId'>;
};

db.version(1).stores({
    wordProgress: 'wordId,lastReviewed,nextReview,level',
});

db.open().catch((err) => {
    console.error('Failed to open database:', err);
});

export { db };
