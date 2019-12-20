/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'mkaz/test-block', {
	title: 'Test Block',
	icon: 'smiley',
	category: 'widgets',
	styles: [
		{ name: 'default', label: 'Default', isDefault: true },
		{ name: 'large', label: 'Large' },
	],
	edit: ( { className } ) => (
		<div className={ className } >
			<p>Hello World.</p>
		</div>
	),
	save: ( { className } ) => (
		<div className={ className }>
			<p>Hola Mundo.</p>
		</div>
	),
} );
