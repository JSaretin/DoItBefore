import { deta } from '$lib/deta';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export let load: PageServerLoad = async ({ locals }) => {
	if (!locals.user.key) {
		throw redirect(302, '/login');
	}
	const query = await deta.Base('doitbefore').fetch({ owner: locals?.user?.key });
	return {
		countdowns: query.items
	};
};
