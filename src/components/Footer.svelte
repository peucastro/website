<script lang="ts">
  const currentYear = new Date().getFullYear();
  const socials = [
    { name: "github", href: "https://github.com/peucastro" },
    { name: "linkedin", href: "https://linkedin.com/in/peucastro" },
  ];
</script>

<footer class="mt-32 border-t bg-bg-deep py-12 font-mono text-xs">
  <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
    <p class="text-fg-muted">
      &copy; {currentYear} // Pedro Castro
    </p>
    <nav class="flex gap-6">
      {#each socials as { name, href }}
        <a {href} target="_blank" rel="noopener" class="text-muted hover:text-primary transition-colors">
          {name}
        </a>
      {/each}
    </nav>
  </div>
</footer>
