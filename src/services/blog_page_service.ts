import { strapiClientRequesterCollectionTypes } from "../utils/strapi_client_requester";
import type { Article } from "../types/collection-types/articles";

const Populate = {
    author: true,
    category: true,
    cover: true,
    blocks: {
        on: {
            "shared.rich-text": true,
            "shared.media": {
                populate: {
                    file: true,
                },
            },
            "shared.quote": true,
            "shared.slider": {
                populate: {
                    files: true,
                },
            },
        },
    },
};

type ArticlesData = {
    data: Article[];
    meta?: {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
};

async function getBlogPageData(): Promise<ArticlesData> {
    const data = await strapiClientRequesterCollectionTypes("articles", {
        populate: Populate,
        sort: "id:desc",
        pagination: {
            page: 1,
            pageSize: 10,
        },
    });

    console.dir(data, { depth: null });

    // @strapi/client 返回宽松的 Document[]，在数据边界处转换为业务类型
    return {
        data: Array.isArray(data?.data) ? (data.data as unknown as Article[]) : [],
        meta: data?.meta,
    };
}

async function getBlogDetailPageData(slug: string): Promise<ArticlesData> {
    const data = await strapiClientRequesterCollectionTypes("articles", {
        filters: {
            slug: slug,
        },
        populate: Populate,
    });

    console.dir(data, { depth: null });

    return {
        ...data,
        data: Array.isArray(data?.data) ? (data.data as unknown as Article[]) : [],
    };
}

// 获取所有文章的 slug，用于详情页 getStaticPaths 生成路由（不受列表页第一页 10 条限制）
async function getAllArticleSlugs(): Promise<string[]> {
    const data = await strapiClientRequesterCollectionTypes("articles", {
        fields: ["slug"],
        sort: "id:desc",
        pagination: {
            page: 1,
            pageSize: 100,
        },
    });

    const docs = Array.isArray(data?.data) ? data.data : [];
    return docs
        .map((doc) => (doc as { slug?: string } | undefined)?.slug)
        .filter((slug): slug is string => Boolean(slug));
}

export { getBlogPageData, getBlogDetailPageData, getAllArticleSlugs };
