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

export interface AboutPageData {
  title: string;
  blocks: (
    | Hero
    | SectionHeading
    | CardGrid
    | ContentWithImage
    | Markdown
    | PersonCard
    | Faqs
    | Newsletter
    | FeaturedArticles
  )[];
}
