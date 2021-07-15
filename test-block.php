<?php
/**
 * Plugin Name: Test Block
 * Plugin URI: https://github.com/mkaz/test-block
 * Description: A block to test with
 * Version: 0.1.0
 * Author: Marcus Kazmierczak
 * Author URI: https://mkaz.blog/
 *
 * @package checkblock
 */

defined( 'ABSPATH' ) || exit;

add_filter( 'should_load_separate_core_block_assets', '__return_true' );

/**
 * Register the things.
 */
add_action( 'init', function() {


	wp_register_script(
		'mkaz-test-block-script',
		plugins_url( 'test-block.js', __FILE__ ),
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
	);

	wp_register_script(
		'mkaz-test-block-frontend',
		plugins_url( 'frontend.js', __FILE__ )
	);

	wp_register_style(
		'mkaz-test-block-editor-style',
		plugins_url( 'editor.css', __FILE__ )
	);

	wp_register_style(
		'mkaz-test-block-style',
		plugins_url( 'style.css', __FILE__ )
	);

	register_block_type( 'mkaz/test-block',
		array(
			'editor_script' => 'mkaz-test-block-script',
			'editor_style'  => 'mkaz-test-block-editor-style',
			'style'         => 'mkaz-test-block-style',
			'script'		=> 'mkaz-test-block-frontend'
		)
	);

} );
