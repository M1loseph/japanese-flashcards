import { createContext, useContext } from 'react';
import type { TranslationLanguage } from '../../types/TranslationLanguage';

export interface ApplicationUserSettingContextType {
    selectedLanguage: TranslationLanguage;
    setSelectedLanguage: (language: TranslationLanguage) => void;
    simplifiedMode: boolean;
    setSimplifiedMode: (enabled: boolean) => void;
}

export const ApplicationUserSettingContext = createContext<ApplicationUserSettingContextType | undefined>(undefined);

export const useApplicationUserSetting = () => {
    const context = useContext(ApplicationUserSettingContext);
    if (!context) {
        throw new Error('useApplicationUserSetting must be used within an ApplicationUserSettingProvider');
    }
    return context;
};
