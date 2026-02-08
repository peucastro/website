<script lang="ts">
  let { currentPath = "/" } = $props();
  const links = [
    { name: "projects", href: "/projects" },
    { name: "blog", href: "/blog" },
    { name: "about", href: "/about" },
  ];
</script>

<header class="border-b bg-bg/80 backdrop-blur-md sticky top-0 z-50">
  <nav class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href="/" class="text-primary font-bold text-xl hover:text-accent transition-colors">
      pedro
    </a>
    <div class="flex gap-6 font-mono text-sm">
      {#each links as { name, href }}
        {@const isActive = currentPath.startsWith(href)}
        <a {href} class={`group transition-colors flex ${isActive ? 'text-primary' : 'text-muted'}`} >
          <span>[</span>
          <span class={`px-0.5 ${isActive ? 'text-fg' : 'text-fg-muted group-hover:text-fg'}`}>
            {name}
          </span>
          <span>]</span>
        </a>
      {/each}
    </div>
  </nav>
</header>
