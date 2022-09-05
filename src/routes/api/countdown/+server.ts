import { deta } from '$lib/deta';
import type { Data } from '$lib/structure';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	// data['lastupdated'] = new Date().getTime();
	const saveData = await deta.Base('doitbefore').put(data);
	return json(saveData);
};
