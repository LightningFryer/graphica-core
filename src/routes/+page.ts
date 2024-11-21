import type { PageLoad } from './$types';

export const ssr = false;
export const prerender = true;

export const load = (async () => {
    return {};
}) satisfies PageLoad;