/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';

registerBlockType( 'mkaz/test-block', {
	title: 'Test Block',
	icon: 'smiley',
	category: 'widgets',
	styles: [
		{ name: 'default', label: 'Default', isDefault: true },
		{ name: 'large', label: 'Large' },
	],
	edit,
	save,
} );
