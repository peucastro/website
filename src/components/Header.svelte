<script lang="ts">
  interface Props {
    currentPath?: string;
  }

  let { currentPath = "/" }: Props = $props();
  const links = [
    { name: "projects", href: "/projects" },
    { name: "blog", href: "/blog" },
    { name: "about", href: "/about" },
  ];
</script>

<header class="bg-bg/80 sticky top-0 z-50 border-b backdrop-blur-md">
  <nav class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
    <a
      href="/"
      class="text-primary hover:text-accent text-xl font-bold transition-colors"
    >
      pedro
    </a>
    <div class="flex gap-6 font-mono text-sm">
      {#each links as { name, href } (name)}
        {@const isActive = currentPath.startsWith(href)}
        <a
          {href}
          class={`group flex transition-colors ${isActive ? "text-primary" : "text-muted"}`}
        >
          <span>[</span>
          <span
            class={`px-0.5 ${isActive ? "text-fg" : "text-fg-muted group-hover:text-fg"}`}
          >
            {name}
          </span>
          <span>]</span>
        </a>
      {/each}
    </div>
  </nav>
</header>
