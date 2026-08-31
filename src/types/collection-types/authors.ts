import type { Image } from "../media";
import type { Article } from "./articles";

export type Author = {
    name: string;
    avatar: Image | null;
    email: string;
    articles: Article[];
};
