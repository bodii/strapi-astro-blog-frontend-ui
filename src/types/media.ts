export interface Media {
    file: Image | File | Video | null;
}

export interface Image {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: ImageFormats | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
}

export interface ImageComponent {
    file: Image;
}


export interface ImageFormats {
    thumbnail?: ImageInfo;
    small?: ImageInfo;
    medium?: ImageInfo;
    large?: ImageInfo;
}

export interface ImageInfo {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
}

export interface Video {

}

export interface File {

}