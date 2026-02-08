<script lang="ts">
  import IconGithub from "~icons/simple-icons/github";
  import IconLinkedin from "~icons/simple-icons/linkedin";

  const currentYear = new Date().getFullYear();
  const socials = [
    { name: "github", href: "https://github.com/peucastro", Icon: IconGithub },
    { name: "linkedin", href: "https://linkedin.com/in/peucastro", Icon: IconLinkedin },
  ];
</script>

<footer class="mt-32 border-t bg-bg-deep py-12 font-mono text-xs">
  <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
    <p class="text-fg-muted">
      &copy; {currentYear} // Pedro Castro
    </p>
    <nav class="flex gap-6">
      {#each socials as { name, href, Icon }}
        <a {href} target="_blank" rel="noopener noreferrer" class="text-muted hover:text-primary transition-colors" aria-label={name}>
          <Icon />
        </a>
      {/each}
    </nav>
  </div>
</footer>
