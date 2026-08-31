import type {
    Link,
    LogoLink,
} from "./shared";

export interface Banner {
    isVisible: boolean;
    link: Link;
    description: string;
}

export interface Header {
    logo: LogoLink;
    navItems: Link[];
    cta: Link;
}

export interface Footer {
    logo: LogoLink;
    navItems: Link[];
    socialLinks: LogoLink[];
    copyrightText: string;
}