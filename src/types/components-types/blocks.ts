import type { Image } from "../media";
import type {
    Card,
    Link,
} from "./shared";
import type { Article } from "../collection-types/articles";

export interface CardGrid {
    cards: Card[];
}

export interface ContentWithImage {
    reversed: boolean;
    heading: string;
    content: string;
    link: Link;
    image: Image | null;
}

export interface Faqs {
    faqs: Card[];
}

export interface FeaturedArticles {
    articles: Article[];
}

export interface Hero {
    heading: string;
    text: string;
    links: Link[];
    image: Image | null;
}

export interface Markdown {
    content: string;
}

export interface Newsletter {
    heading: string;
    text: string;
    placeholder: string;
    lable: string;
    formId: string;
}

export interface PersonCard {
    photo: Image | null;
    text: string;
    personName: string;
    personJob: string;
}

export interface SectionHeading {
    subHeading: string;
    heading: string;
    anchorLink: string;
}