import type { PageServerLoad } from './$types';
import { CMS_DOMAIN } from '$env/static/private';
export const load = (async ({ fetch }) => {
    const res = await fetch(`${CMS_DOMAIN}/api/content/get-all-brand-data`);
    const brands = await res.json();
    console.log(brands);

    return { brands };
}) satisfies PageServerLoad;
