import type { JapaneseWord } from '../japanese';

export interface FlashcardSession {
    word: JapaneseWord;
    wordBag: string;
    answered: boolean;
    correct: boolean;
}
