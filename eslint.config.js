import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default [
	{ ignores: ['dist'] },
	// JavaScript/JSX block
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module'
			}
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh
		},
		rules: {
			...js.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
		}
	},
	// TypeScript/TSX block
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tseslint.parser,
			ecmaVersion: 2020,
			sourceType: 'module',
			globals: globals.browser,
			parserOptions: {
				project: './tsconfig.json',
				ecmaFeatures: { jsx: true }
			}
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh
		},
		rules: {
			...js.configs.recommended.rules,
			...tseslint.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['error'],
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'react/prop-types': 'off'
		}
	}
];
