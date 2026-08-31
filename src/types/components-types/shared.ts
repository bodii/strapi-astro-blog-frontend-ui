import type { Image, ImageComponent, File, Video } from "../media";

export interface Link {
    id: number;
    href: string;
    label: string;
    isExternal: boolean;
    isButtonLink: boolean;
    type: string | null;
}

export interface LogoLink {
    label: string;
    href: string;
    isExternal: boolean;
    image: Image;
}

export interface Card {
    heading: string;
    text: string;
}

export interface Media {
    file: Image | File | Video | null;
}


export interface Quote {
    title: string;
    body: string;
}

export interface RichText {
    body: string;
}

export interface Seo {
    metaTitle: string;
    metaDescription: string;
    shareImage: Image | null;
}

export interface Slider {
    files: Image[];
}