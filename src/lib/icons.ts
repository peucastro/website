import IconGithub from "~icons/simple-icons/github";
import IconLinkedin from "~icons/simple-icons/linkedin";
import type { Component } from "svelte";

export const SOCIAL_ICONS = {
  github: IconGithub,
  linkedin: IconLinkedin,
} as const satisfies Record<string, Component>;

export type SocialIconName = keyof typeof SOCIAL_ICONS;
