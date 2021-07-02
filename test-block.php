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

	register_block_type( __DIR__ );

} );
