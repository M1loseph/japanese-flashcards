import { useEffect, useState, type FC, type ReactNode } from 'react';
import * as z from 'zod';
import {
    TranslationLanguages,
    TranslationLanguagesSchema,
    type TranslationLanguage,
} from '../../types/TranslationLanguage';
import { ApplicationUserSettingContext } from './ApplicationUserSettingContext';

const APPLICATION_USER_SETTING_KEY = 'applicationUserSetting';

const ApplicationUserSettingSchema = z.object({
    version: z.literal(1),
    selectedLanguage: TranslationLanguagesSchema,
    simplifiedMode: z.boolean(),
});

type ApplicationUserSetting = z.infer<typeof ApplicationUserSettingSchema>;

const defaultApplicationUserSetting: ApplicationUserSetting = {
    version: 1,
    selectedLanguage: TranslationLanguages.ENGLISH,
    simplifiedMode: false,
};

const readApplicationUserSetting = (): ApplicationUserSetting => {
    try {
        const saved = localStorage.getItem(APPLICATION_USER_SETTING_KEY);
        if (!saved) return defaultApplicationUserSetting;
        return ApplicationUserSettingSchema.parse(JSON.parse(saved));
    } catch (error) {
        localStorage.removeItem(APPLICATION_USER_SETTING_KEY);
        console.error('Failed to parse application user setting:', error);
        return defaultApplicationUserSetting;
    }
};

export const ApplicationUserSettingProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [setting, setSetting] = useState<ApplicationUserSetting>(readApplicationUserSetting);

    useEffect(() => {
        localStorage.setItem(APPLICATION_USER_SETTING_KEY, JSON.stringify(setting));
    }, [setting]);

    const setSelectedLanguage = (selectedLanguage: TranslationLanguage) => {
        setSetting((currentSetting) => ({ ...currentSetting, selectedLanguage }));
    };

    const setSimplifiedMode = (simplifiedMode: boolean) => {
        setSetting((currentSetting) => ({ ...currentSetting, simplifiedMode }));
    };

    return (
        <ApplicationUserSettingContext.Provider
            value={{
                selectedLanguage: setting.selectedLanguage,
                setSelectedLanguage,
                simplifiedMode: setting.simplifiedMode,
                setSimplifiedMode,
            }}
        >
            {children}
        </ApplicationUserSettingContext.Provider>
    );
};
