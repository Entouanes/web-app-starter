import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

export default ts.config(
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		},
		
		rules: {
			'svelte/a11y-label-has-associated-control': 'off',
			'svelte/a11y-missing-label': 'off',
		},
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
);