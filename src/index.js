
/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'mkaz/test-block', {
	apiVersion: 2,
	attributes: {
		content: {
			type: 'string',
			default: 'some random value',
		},
	},
    deprecated: [
        {
			attributes: {
                text: {
                    type: 'string',
                    default: 'some random value',
                },
            },
 
            save( props ) {
                return <p>{ props.attributes.text }</p>;
            },
        },
    ],

	edit: ( props ) => {
		return <div> Placeholder </div>
	},
	save: ( props ) => {
		return <div>{ props.attributes.content }</div>
	},
} );


