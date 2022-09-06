import type { LayoutServerLoad } from './$types';

export let load: LayoutServerLoad = ({ locals }) => {
	return locals;
};
