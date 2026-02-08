<script lang="ts">
  let links = [
    { name: "projects", href: "/projects" },
    { name: "blog", href: "/blog" },
    { name: "about", href: "/about" },
  ];
</script>

<header class="border-b border-border bg-bg/80 backdrop-blur-md sticky top-0 z-50">
  <nav class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
    <a href="/" class="text-primary font-bold text-xl hover:text-accent transition-colors" aria-label="Homepage">
      pedro </a>

    <div class="flex gap-6">
      {#each links as link}
        <a href={link.href} class="text-fg-muted hover:text-fg font-mono text-sm transition-colors" aria-label={link.name}>
          [{link.name}]
        </a>
      {/each}
    </div>
  </nav>
</header>
