import { strapi } from '@strapi/client';

const BASE_URL = (import.meta.env.STRAPI_BASE_URL ?? "http://localhost:1337");

const BASE_API_URL = BASE_URL + "/api";
const strapiClient = strapi({ baseURL: BASE_API_URL });
export { strapiClient, BASE_URL, BASE_API_URL };
