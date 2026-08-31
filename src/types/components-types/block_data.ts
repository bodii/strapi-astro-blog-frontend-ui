import type { Image, ImageComponent } from "../media";
import type { Card, Link } from "./shared";
import type { Article } from "../collection-types/articles";

export type BlockComponentType =
  | "blocks.hero"
  | "blocks.section-heading"
  | "blocks.card-grid"
  | "blocks.content-with-image"
  | "blocks.faqs"
  | "blocks.person-card"
  | "blocks.markdown"
  | "blocks.featured-articles"
  | "blocks.newsletter";

export interface Base<
  T extends BlockComponentType,
  D extends object = Record<string, unknown>
> {
  id?: number;
  __component: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}

export interface HeroProps extends Base<"blocks.hero"> {
  heading: string;
  text: string;
  image: ImageComponent;
  links: Link[];
}

export interface SectionHeadingProps extends Base<"blocks.section-heading"> {
  subHeading: string;
  heading: string;
  anchorLink: string;
}

export interface CardGridProps extends Base<"blocks.card-grid"> {
  cards: {
    id: number;
    heading: string;
    text: string;
    image?: Image;
  }[];
}

export interface ContentWithImageProps
  extends Base<"blocks.content-with-image"> {
  heading: string;
  text: string;
  link: Link;
  image: ImageComponent | null;
  reversed: boolean;
}

export interface FaqsProps extends Base<"blocks.faqs"> {
  faqs: Card[];
}
export interface PersonCardProps extends Base<"blocks.person-card"> {
  personName: string;
  personJob: string;
  photo: {
    file: Image;
  } | null;
  text: string;
}

export interface MarkdownProps extends Base<"blocks.markdown"> {
  content: string;
}

export interface FeaturedArticlesProps extends Base<"blocks.featured-articles"> {
  articles?: Article[];
}

export interface NewsletterProps extends Base<"blocks.newsletter"> {
  heading: string;
  text: string;
  placeholder: string;
  lable: string;
  formId: string;
}

export type BlockData =
  | HeroProps
  | SectionHeadingProps
  | CardGridProps
  | ContentWithImageProps
  | FaqsProps
  | PersonCardProps
  | MarkdownProps
  | FeaturedArticlesProps
  | NewsletterProps;
