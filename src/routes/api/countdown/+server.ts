import { deta } from '$lib/deta';
import type { CountdownForm, CountdownToSave, SavedCountdown } from '$lib/structure';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, locals }) => {
	if (!locals.user?.key)
		return {
			status: 401,
			errors: {
				message: '!auth'
			}
		};
	const data: CountdownForm = await request.json();
	const parsedCountdown: CountdownToSave = {
		...data,
		created_at: new Date().getTime(),
		can_edit: [],
		owner: locals.user.key
	};
	const createdCountdown: SavedCountdown = await deta.Base('doitbefore').put(parsedCountdown);
	return json(createdCountdown);
};
