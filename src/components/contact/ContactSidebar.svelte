<script lang="ts">
  import { SITE_METADATA, SOCIAL_LINKS } from "$lib/config";
  import IconMail from "~icons/lucide/mail";
</script>

<aside class="space-y-10 md:col-span-4">
  <section class="space-y-3">
    <h3 class="sidebar-section-title">Direct Contact</h3>
    <a href="mailto:{SITE_METADATA.email}" class="contact-link group">
      <div class="contact-icon-box">
        <IconMail width="16" />
      </div>
      <span
        class="text-fg-muted group-hover:text-primary font-mono text-sm transition-colors"
      >
        {SITE_METADATA.email}
      </span>
    </a>
  </section>

  <section class="space-y-3">
    <h3 class="sidebar-section-title">Socials</h3>
    <ul class="space-y-2">
      {#each SOCIAL_LINKS as social (social.name)}
        <li>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link group"
          >
            <div class="contact-icon-box">
              <svelte:component this={social.Icon} width="16" />
            </div>
            <span
              class="text-fg-muted group-hover:text-primary font-mono text-sm transition-colors"
            >
              {social.name}
            </span>
          </a>
        </li>
      {/each}
    </ul>
  </section>
</aside>
