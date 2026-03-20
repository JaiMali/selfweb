import type { SeoConfig } from "../content/siteContent";

const upsertMeta = (
  selectorAttribute: "name" | "property",
  selectorValue: string,
  content: string,
) => {
  let element = document.head.querySelector(
    `meta[${selectorAttribute}="${selectorValue}"]`,
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(selectorAttribute, selectorValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let element = document.head.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

export const applySeo = (seo: SeoConfig) => {
  document.title = seo.title;

  upsertMeta("name", "description", seo.description);
  upsertMeta("property", "og:title", seo.title);
  upsertMeta("property", "og:description", seo.description);
  upsertMeta("property", "og:image", seo.ogImage);
  upsertMeta("name", "theme-color", "#F5F1E8");

  upsertLink("icon", seo.favicon);

  if (seo.siteUrl) {
    upsertMeta("property", "og:url", seo.siteUrl);
    upsertLink("canonical", seo.siteUrl);
  }
};
