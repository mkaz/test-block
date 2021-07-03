
import { __ } from '@wordpress/i18n';

export default function save() {
	return (
		<p>
			{ __(
				'Gutenpride – hello from the saved content!',
				'create-block'
			) }
		</p>
	);
}
