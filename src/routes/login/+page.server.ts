import type { Actions, PageServerLoad } from './$types';
import PocketBase from 'pocketbase';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    loginGoogle: async ({locals, request}) => {
        const pb = new PocketBase('http://127.0.0.1:8090');
        const authData = await pb.collection('users').authWithOAuth2({ provider: 'google', urlCallback: (url: string) => {
            window.open(url, "_blank");
        }});
    }
};