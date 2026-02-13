<script lang="ts">
  import { SITE_METADATA, SOCIAL_LINKS } from "$lib/config";
  import IconFileText from "~icons/lucide/file-text";
  import IconRss from "~icons/lucide/rss";
  import IconMail from "~icons/lucide/mail";
  import ThemeToggle from "@components/common/ThemeToggle.svelte";

  const currentYear = new Date().getFullYear();
  const socials = [
    {
      name: "curriculum vitae",
      href: "https://cv.peucastro.me/",
      Icon: IconFileText,
    },
    ...SOCIAL_LINKS.map(({ name, href, Icon }) => ({
      name: name.toLowerCase(),
      href,
      Icon,
    })),
    {
      name: "e-mail",
      href: `mailto:${SITE_METADATA.email}`,
      Icon: IconMail,
    },
    {
      name: "rss",
      href: `${SITE_METADATA.siteUrl}/rss.xml`,
      Icon: IconRss,
    },
  ];
</script>

<footer class="bg-bg-deep mt-32 border-t py-12 font-mono text-xs">
  <div
    class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 md:flex-row"
  >
    <p class="text-fg-muted">
      &copy; {currentYear} // Pedro Castro
    </p>
    <nav class="flex items-center gap-6">
      <ThemeToggle />
      {#each socials as { name, href, Icon } (name)}
        <a
          {href}
          target="_blank"
          rel="noopener noreferrer"
          class="text-muted hover:text-primary transition-colors"
          aria-label={name}
        >
          <Icon />
        </a>
      {/each}
    </nav>
  </div>
</footer>
