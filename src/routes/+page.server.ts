import { deta } from '$lib/deta';

export const load = async () => {
	const countdowns = await deta.Base('doitbefore').fetch();
	return {
		countdowns: countdowns.items
	};
};
