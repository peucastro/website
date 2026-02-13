import type { SocialIconName } from "./icons";

export const SITE_METADATA = {
  title: "Pedro Castro",
  description: "Informatics and computing engineering student portfolio",
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
