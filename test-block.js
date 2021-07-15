( function( wp ) {

	const { registerBlockType } = wp.blocks;
	const el = wp.element.createElement;

	registerBlockType( 'mkaz/test-block', {

		title: 'Test Block',
		icon: 'smiley',
		category: 'widget',

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

}( window.wp ) );
