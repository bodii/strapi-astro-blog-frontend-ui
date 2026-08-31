import { strapiClient, BASE_URL, BASE_API_URL } from "../config/strapi_client";

async function strapiClientRequesterSingleType(name: string, params: object) {
  console.log(`${BASE_API_URL}/${name}`);
  const data = await strapiClient.single(name).find(params);

  return data;
}

async function strapiClientRequesterCollectionTypes(name: string, params: object) {
  console.log(`${BASE_API_URL}/${name}`);
  const data = await strapiClient.collection(name).find(params);

  return data;
}

// Enhanced media URL processing with error handling
function getStrapiMedia(url: string, defaultValue?: string): string | null {
  try {
    if (!url) return null;

    // Return as-is if it's a data URL (base64)
    if (url.startsWith("data:")) return url;

    // Return as-is if it's an absolute URL
    if (url.startsWith("http") || url.startsWith("//")) return url;

    // Prepend BASE_URL for relative URLs
    return `${BASE_URL}${url}`;
  } catch (error) {
    console.error("StrapiImage: Error processing image URL:", error);

    return defaultValue ? `${BASE_URL}${defaultValue}` : null;
  }
}

export { strapiClientRequesterSingleType, strapiClientRequesterCollectionTypes, getStrapiMedia }
