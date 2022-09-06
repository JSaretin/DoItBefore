import { deta } from '$lib/deta';
import type { SavedCountdown } from '$lib/structure';

export const load = async () => {
	const countdowns: { items: SavedCountdown[] } = await deta.Base('doitbefore').fetch();
	return {
		countdowns: countdowns.items
	};
};
