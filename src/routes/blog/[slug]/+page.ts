import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {	
	const done = params.slug;
	const module = await import(`../../../lib/components/blogs/${params.slug}.svelte`);
	return {module, done}

	error(404, 'Not found');
};