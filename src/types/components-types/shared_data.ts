import type { Image, Video, File } from "../media";
import type { Article } from "../collection-types/articles";

export type SharedComponentType =
  | "shared.link"
  | "shared.logo-link"
  | "shared.card"
  | "shared.media"
  | "shared.quote"
  | "shared.rich-text"
  | "shared.seo"
  | "shared.slider";

export interface Base<
  T extends SharedComponentType,
  D extends object = Record<string, unknown>,
> {
  id?: number;
  __component: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}

export interface LinkProps extends Base<"shared.link"> {
  id: number;
  href: string;
  label: string;
  isExternal: boolean;
  isButtonLink: boolean;
  type: string | null;
}

export interface LogoLinkProps extends Base<"shared.logo-link"> {
  label: string;
  href: string;
  isExternal: boolean;
  image: Image | null;
}

export interface CardProps extends Base<"shared.card"> {
  heading: string;
  text: string;
}

export interface MediaProps extends Base<"shared.media"> {
  file: Image | File | Video | null;
}

export interface QuoteProps extends Base<"shared.quote"> {
  title?: string;
  body?: string;
  text?: string;
  file?: Image | File | Video | null;
}

export interface RichTextProps extends Base<"shared.rich-text"> {
  personName?: string;
  personJob?: string;
  image?: Image | null;
  text?: string;
  body?: string;
}

export interface SeoProps extends Base<"shared.seo"> {
  metaTitle?: string;
  metaDescription?: string;
  shareImage?: Image | null;
}

export interface SliderProps extends Base<"shared.slider"> {
  files?: Image[];
  articles?: Article[];
}

export type SharedData =
  | LinkProps
  | LogoLinkProps
  | CardProps
  | MediaProps
  | QuoteProps
  | RichTextProps
  | SeoProps
  | SliderProps;