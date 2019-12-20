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

/**
 * Register the things.
 */
add_action( 'init', function() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'mkaz-test-block-script',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type( 'mkaz/test-block', array(
		'editor_script' => 'mkaz-test-block-script',
	) );

} );
