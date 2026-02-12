import type { FlashcardSession } from './FlashcardSession';
import type { TranslationLanguage } from './TranslationLanguage';

export interface GameState {
    initialWordBags: string[];
    flashcards: FlashcardSession[];
    gameStartTimeMs: number;
    currentFlashcardIndex: number;
    selectedLanguage: TranslationLanguage;
}
