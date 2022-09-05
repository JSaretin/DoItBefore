import { deta } from '$lib/deta';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, Action } from '../$types';

export const load: PageServerLoad = async ({ params }) => {
	const countdown = await deta.Base('doitbefore').get(params.countdown_id);
	if (!countdown) {
		throw error(404, 'countdown not found');
	}
	return countdown;
};

export const POST: Action = async ({ request, params }) => {
	const data = await request.json();
	await deta.Base('doitbefore').update({ todos: data }, params.countdown_id);
};
