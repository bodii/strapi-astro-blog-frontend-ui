import type {
    Media,
    Quote,
    RichText,
    Slider,
} from "../components-types/shared";
import type { Image } from "../media";
import type { Author } from "./authors";
import type { Category } from "./categories";

export interface Article {
    title: string;
    description: string;
    slug: string;
    cover: Image | null;
    author: Author | null;
    category: Category | null;
    blocks: (
        | Media
        | Quote
        | RichText
        | Slider
    )[];
    publishedAt: string;
    updatedAt: string;
}
