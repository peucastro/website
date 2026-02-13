import type { SocialIconName } from "./icons";

export const SITE_METADATA = {
  title: "Pedro Castro",
  description: "Informatics and computing engineering student portfolio",
  author: "Pedro Castro",
  email: "falecompedroac@gmail.com",
  siteUrl: "https://peucastro.me",
} as const;

export const SOCIAL_LINKS: ReadonlyArray<{
  name: string;
  href: string;
  icon: SocialIconName;
}> = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/peucastro",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/peucastro",
    icon: "github",
  },
];

export const personSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Person" as const,
  name: SITE_METADATA.author,
  url: SITE_METADATA.siteUrl,
  sameAs: SOCIAL_LINKS.map((link) => link.href),
  jobTitle: "Informatics and Computing Engineering Student",
  description: SITE_METADATA.description,
  email: SITE_METADATA.email,
} as const;
