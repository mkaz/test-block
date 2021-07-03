
/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

registerBlockType( 'mkaz/test-block', {
	apiVersion: 2,
	edit: Edit,
	save,
} );
