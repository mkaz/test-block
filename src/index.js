
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
			source: 'html',
			selector: 'div',
		},
	},
    deprecated: [
        {
			attributes: {
                text: {
                    type: 'string',
					source: 'html',
					selector: 'p',
				},
            },
			migrate: ( attributes ) => {
				return {
					content: attributes.text
				}
			},
            save( props ) {
                return <p>{ props.attributes.text }</p>;
            },
        },
    ],

	edit: ( props ) => {
		return <div>{props.attributes.content}</div>
	},
	save: ( props ) => {
		return <div>{ props.attributes.content }</div>
	},
} );


