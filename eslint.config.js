import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
    globalIgnores(['dist']),
    {
        plugins: {
            '@stylistic': stylistic,
        },
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            "comma-dangle": ["error", "always-multiline"],
            "semi": ["error", "always"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/linebreak-style": ["error", "unix"],
        },
    },
    reactHooks.configs.flat['recommended-latest'],
])
