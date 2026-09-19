import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { TranslationLanguages } from '../../types/TranslationLanguage';
import { useApplicationUserSetting } from './ApplicationUserSettingContext';
import { ApplicationUserSettingProvider } from './ApplicationUserSettingProvider';

const APPLICATION_USER_SETTING_KEY = 'applicationUserSetting';

const SettingsReader = () => {
    const { selectedLanguage, setSelectedLanguage, simplifiedMode, setSimplifiedMode } = useApplicationUserSetting();

    return (
        <>
            <output>{`${selectedLanguage}-${simplifiedMode}`}</output>
            <button onClick={() => setSelectedLanguage(TranslationLanguages.POLISH)}>Set Polish</button>
            <button onClick={() => setSimplifiedMode(true)}>Enable simplified mode</button>
        </>
    );
};

const renderProvider = () => {
    return render(
        <ApplicationUserSettingProvider>
            <SettingsReader />
        </ApplicationUserSettingProvider>,
    );
};

afterEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
});

describe('ApplicationUserSettingProvider', () => {
    it('uses and persists the default settings', () => {
        renderProvider();

        expect(screen.getByText('en-false')).toBeInTheDocument();
        expect(JSON.parse(localStorage.getItem(APPLICATION_USER_SETTING_KEY) ?? '')).toEqual({
            version: 1,
            selectedLanguage: TranslationLanguages.ENGLISH,
            simplifiedMode: false,
        });
    });

    it('loads valid saved settings', () => {
        localStorage.setItem(
            APPLICATION_USER_SETTING_KEY,
            JSON.stringify({ version: 1, selectedLanguage: TranslationLanguages.POLISH, simplifiedMode: true }),
        );

        renderProvider();

        expect(screen.getByText('pl-true')).toBeInTheDocument();
    });

    it('replaces invalid saved settings with defaults', () => {
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
        localStorage.setItem(APPLICATION_USER_SETTING_KEY, '{invalid json');

        renderProvider();

        expect(screen.getByText('en-false')).toBeInTheDocument();
        expect(JSON.parse(localStorage.getItem(APPLICATION_USER_SETTING_KEY) ?? '')).toEqual({
            version: 1,
            selectedLanguage: TranslationLanguages.ENGLISH,
            simplifiedMode: false,
        });
    });

    it('persists setting updates', async () => {
        const user = userEvent.setup();
        renderProvider();

        await user.click(screen.getByRole('button', { name: 'Set Polish' }));
        await user.click(screen.getByRole('button', { name: 'Enable simplified mode' }));

        expect(screen.getByText('pl-true')).toBeInTheDocument();
        expect(JSON.parse(localStorage.getItem(APPLICATION_USER_SETTING_KEY) ?? '')).toEqual({
            version: 1,
            selectedLanguage: TranslationLanguages.POLISH,
            simplifiedMode: true,
        });
    });
});
