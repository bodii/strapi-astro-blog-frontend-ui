import type {
    CardGrid,
    ContentWithImage,
    FeaturedArticles,
    Faqs,
    Hero,
    Markdown,
    Newsletter,
    PersonCard,
    SectionHeading,
} from "../components-types/blocks";

export type Page = {
    title: string;
    description: string;
    slug: string;
    blocks: (
        | PersonCard
        | SectionHeading
        | Newsletter
        | Markdown
        | Hero
        | Faqs
        | ContentWithImage
        | CardGrid
        | FeaturedArticles
    )[];
};
