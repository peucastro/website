import { SITE_METADATA, SOCIAL_LINKS } from "$lib/config";

const BASE_URL = SITE_METADATA.siteUrl.replace(/\/$/, "");

export const personSchema = {
  "@type": "Person" as const,
  name: SITE_METADATA.author,
  url: BASE_URL + "/",
  sameAs: SOCIAL_LINKS.map((link) => link.href),
  jobTitle: "Informatics and Computing Engineering Student",
  description: SITE_METADATA.description,
  email: SITE_METADATA.email,
  knowsAbout: [
    "Software Development",
    "Algorithms",
    "Web Development",
    "Open Source",
  ],
} as const;

export function buildBreadcrumbs(pathname: string, lastTitle?: string) {
  const segments = pathname.split("/").filter(Boolean);
  const itemListElement = [
    {
      "@type": "ListItem" as const,
      position: 1,
      name: "Home",
      item: `${BASE_URL}/`,
    },
  ];

  segments.forEach((segment, index) => {
    const isLast = index === segments.length - 1;
    const path = `/${segments.slice(0, index + 1).join("/")}/`;

    const name =
      isLast && lastTitle
        ? lastTitle
        : segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

    itemListElement.push({
      "@type": "ListItem" as const,
      position: index + 2,
      name,
      item: new URL(path, BASE_URL).href,
    });
  });

  return {
    "@context": "https://schema.org" as const,
    "@type": "BreadcrumbList" as const,
    itemListElement,
  };
}
