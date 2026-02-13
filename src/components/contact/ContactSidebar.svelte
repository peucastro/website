<script lang="ts">
  import IconGithub from "~icons/simple-icons/github";
  import IconLinkedin from "~icons/simple-icons/linkedin";
  import IconMail from "~icons/lucide/mail";

  const SOCIALS = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/peucastro",
      icon: IconLinkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/peucastro",
      icon: IconGithub,
    },
  ];
</script>

<aside class="space-y-10 md:col-span-4">
  <section class="space-y-3">
    <h3 class="sidebar-section-title">Direct Contact</h3>
    <a href="mailto:falecompedroac@gmail.com" class="contact-link group">
      <div class="contact-icon-box">
        <IconMail width="16" />
      </div>
      <span class="text-fg-muted font-mono text-sm"
        >falecompedroac@gmail.com</span
      >
    </a>
  </section>

  <section class="space-y-3">
    <h3 class="sidebar-section-title">Socials</h3>
    <ul class="space-y-2">
      {#each SOCIALS as social (social.name)}
        <li>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link group"
            aria-label={social.name}
          >
            <div class="contact-icon-box">
              <svelte:component this={social.icon} width="16" />
            </div>
            <span
              class="text-fg-muted group-hover:text-primary font-mono text-sm transition-colors"
              >{social.name}</span
            >
          </a>
        </li>
      {/each}
    </ul>
  </section>
</aside>
