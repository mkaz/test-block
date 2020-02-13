<?php
/**
 * Plugin Name: Test Block
 * Plugin URI: https://github.com/mkaz/test-block
 * Description: A block to test with
 * Version: 0.2.0
 * Author: Marcus Kazmierczak
 * Author URI: https://mkaz.blog/
 *
 * @package checkblock
 */

defined( 'ABSPATH' ) || exit;

/**
 * Register the things.
 */
add_action( 'init', function() {

	wp_register_script(
		'mkaz-test-block-script',
		plugins_url( 'my-heading.js', __FILE__ ),
        array( 'wp-blocks', 'wp-editor', 'wp-element' )
	);

	register_block_type( 'mkaz/test-block', array(
		'editor_script' => 'mkaz-test-block-script',
	) );

	wp_enqueue_script(
        'unregister-heading',
        plugins_url( 'unregister-heading.js', __FILE__ ),
        array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' )
    );

} );
