import { strapi } from '@strapi/client';
import { env } from 'cloudflare:workers';

const BASE_URL = env.STRAPI_BASE_URL;

if (!BASE_URL) {
  throw new Error(
    'Missing Cloudflare Worker env STRAPI_BASE_URL. Set it with `wrangler secret put STRAPI_BASE_URL` or in the Cloudflare dashboard.'
  );
}

const BASE_API_URL = `${BASE_URL.replace(/\/$/, '')}/api`;
const strapiClient = strapi({ baseURL: BASE_API_URL });

export { strapiClient, BASE_URL, BASE_API_URL };
