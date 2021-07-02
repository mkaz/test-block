/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;
const el = wp.element.createElement;

let metadata = {
    "apiVersion": 2,
    "name": "mkaz/test-block",
    "title": "Test Block",
    "category": "widgets",
    "icon": "smiley",
    "description": "Just. a. test.",
    "supports": {
        "color": {
			"text": true,
			"link": true,
		}
    },
    "textdomain": "mkaz",
    "editorScript": "file:./test-block.js",
};

registerBlockType( metadata, {
	edit: ( { className } ) => {
		return el(
			'div',
			{ className: className },
			'Hello World'
		)
	},
	save: ( { className } ) => {
		return el(
			'div',
			{ className: className },
			'Hello World'
		)
	},
} );
