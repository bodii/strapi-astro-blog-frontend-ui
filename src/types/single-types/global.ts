
import type { Image } from "../media";
import type { Banner, Header, Footer } from "../components-types/layout";
import type { Seo } from "../components-types/shared";


export interface Global {
    siteName: string;
    favicon: Image | null;
    siteDescription: string;
    defaultSeo: Seo;
    noticeBanner: Banner;
    header: Header;
    footer: Footer;
}