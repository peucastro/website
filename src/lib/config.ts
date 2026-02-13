import type { SocialIconName } from "$lib/icons";

export const SITE_METADATA = {
  title: "Pedro Castro",
  description:
    "Portfolio and personal website of Pedro Castro, an informatics and computing engineering student focused on software development, algorithms, open-source, and modern web technologies.",
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
