import { deta } from '$lib/deta';
import type { SavedCountdown } from '$lib/structure';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, Action } from '../$types';

export const load: PageServerLoad = async ({ params }) => {
	const countdown = await deta.Base('doitbefore').get(params.countdown_id);
	if (!countdown) {
		throw error(404, 'countdown not found');
	}
	return {
		countdown
	};
};

export const POST: Action = async ({ request, params, locals }) => {
	const countdown: SavedCountdown = await request.json();
	if (countdown.key != params.countdown_id) {
		return {
			status: 400,
			errors: {
				message: 'bad request'
			}
		};
	}

	const savedCountdown: SavedCountdown | null = await deta
		.Base('doitbefore')
		.get(params.countdown_id);

	if (!savedCountdown) {
		return {
			status: 400,
			errors: {
				message: 'not found'
			}
		};
	}

	const canEdit =
		locals?.user?.key == savedCountdown.owner ||
		savedCountdown.can_edit.filter((obj) => obj.user_id == locals?.user?.key).length != 0;
	if (!canEdit) {
		return {
			status: 401,
			errors: {
				message: 'not countdown owner'
			}
		};
	}
	await deta.Base('doitbefore').update({ todos: countdown.todos }, countdown.key);
};
