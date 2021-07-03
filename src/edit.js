
import { __ } from '@wordpress/i18n';

export default function Edit( { className } ) {
	return (
		<p className={ className }>
			{ __( 'Gutenpride – hello from the editor!', 'create-block' ) }
		</p>
	);
}
