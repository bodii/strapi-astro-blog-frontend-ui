
import { strapiClientRequesterSingleType } from "../utils/strapi_client_requester";

const blocksPopulate = {
    on: {
        "blocks.hero": {
            populate: {
                links: true,
                image: { populate: { file: true } },
            },
        },
        "blocks.section-heading": true,
        "blocks.card-grid": {
            populate: {
                cards: true,
            },
        },
        "blocks.content-with-image": {
            populate: {
                link: true,
                image: { populate: { file: true } },
            },
        },
        "blocks.markdown": true,
        "blocks.person-card": {
            populate: {
                photo: { populate: { file: true } },
            },
        },
        "blocks.faqs": {
            populate: {
                faqs: true,
            },
        },
        "blocks.newsletter": true,
    },
};

async function getLandingPageData() {
    const data = await strapiClientRequesterSingleType("landing-page", {
        populate: {
            blocks: blocksPopulate,
        },
    });

    console.dir(data, { depth: null });
    return data;
}

export { getLandingPageData };