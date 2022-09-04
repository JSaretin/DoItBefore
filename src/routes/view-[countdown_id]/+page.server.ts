import { base } from '$lib/deta';
import type { PageServerLoad, Action } from '../$types';

export const load: PageServerLoad = async ({ params }) => {
	const countdown = await base.get(params.countdown_id);
	return countdown;
};

export const POST: Action = async ({ request, params }) => {
	const data = await request.json();
	const updated = await base.update({ todos: data }, params.countdown_id);
};
