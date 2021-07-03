<?php
/**
 * Plugin Name:     Test Block
 * Version:         0.2.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     test-block
 *
 * @package         test-block
 */

add_action( 'init', function() {
	register_block_type_from_metadata( __DIR__ );
} );
