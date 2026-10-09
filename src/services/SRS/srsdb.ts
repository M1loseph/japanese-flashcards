import { Dexie, type EntityTable } from 'dexie';
import type { WordLearningProgressEntity } from './types';

const db = new Dexie('JapaneseFlashcardsDB') as Dexie & {
    wordProgress: EntityTable<WordLearningProgressEntity, 'wordId'>;
};

db.version(1).stores({
    wordProgress: 'wordId,lastReviewed,nextReview,level',
});

db.open().catch((err) => {
    console.error('Failed to open database:', err);
});

export { db };
