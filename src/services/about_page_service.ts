import { strapiClientRequesterSingleType } from "../utils/strapi_client_requester";

const blocksPopulate = {
  on: {
    "shared.quote": true,
    "shared.rich-text": true,
    "shared.media": {
      populate: {
        file: true,
      },
    },
  },
};

async function getAboutPageData() {
  const data = await strapiClientRequesterSingleType("about", {
    populate: {
      blocks: blocksPopulate,
    },
  });

  console.dir(data, { depth: null });

  return data;
}

export { getAboutPageData };
