import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    globalIgnores(['dist']),
    {
        plugins: {
            '@stylistic': stylistic,
        },
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.strict,
            reactRefresh.configs.vite,
            eslintConfigPrettier,
            importPlugin.flatConfigs.recommended,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        settings: {
            'import/resolver': {
                typescript: true,
            },
        },
        rules: {
            'import/extensions': ['error', 'never'],
        },
    },
    reactHooks.configs.flat['recommended-latest'],
]);
