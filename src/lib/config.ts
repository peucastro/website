import IconGithub from "~icons/simple-icons/github";
import IconLinkedin from "~icons/simple-icons/linkedin";
import type { Component } from "svelte";

export const SITE_METADATA = {
  title: "Pedro Castro",
  description: "Informatics and computing engineering student portfolio",
  email: "falecompedroac@gmail.com",
  siteUrl: "https://peucastro.me",
} as const;

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/peucastro",
    Icon: IconLinkedin as Component,
  },
  {
    name: "GitHub",
    href: "https://github.com/peucastro",
    Icon: IconGithub as Component,
  },
];
