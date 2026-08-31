import { strapiClientRequesterSingleType } from "../utils/strapi_client_requester";

const globalPopulate = {
    noticeBanner: true,
    header: {
        populate: {
            logo: {
                populate: {
                    image: true,
                },
            },
            navItems: true,
            cta: true,
        },
    },
    footer: {
        populate: {
            logo: {
                populate: {
                    image: true,
                },
            },
            navItems: true,
            socialLinks: {
                populate: {
                    image: true,
                },
            },
        },
    },
};

async function getGlobalData() {
    const data = await strapiClientRequesterSingleType("global", {
        populate: globalPopulate,
    });
    const globalData = data?.data;
    if (!globalData) throw new Error("No global data found");

    console.dir(globalData, { depth: null });
    return globalData;
}

export { getGlobalData };