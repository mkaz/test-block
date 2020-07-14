
( function( hooks ) {


	function addMyAttributes( props, type, attributes ) {

		if ( type.name === 'core/heading' ) {
			return {
				...props,
				style: { backgroundColor: 'red' },
			}
		}

		return props;
	}

	hooks.addFilter(
		'blocks.getSaveContent.extraProps',
		'mkaz/test-block',
		addMyAttributes
	);
	} )( window.wp.hooks );