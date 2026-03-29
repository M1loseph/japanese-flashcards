import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
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
        extends: [js.configs.recommended, tseslint.configs.strict, reactRefresh.configs.vite, eslintConfigPrettier],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
    },
    reactHooks.configs.flat['recommended-latest'],
]);
