import type { Article } from "./articles";

export type Category = {
    name: string;
    slug: string;
    articles: Article[];
    description: string;
};
