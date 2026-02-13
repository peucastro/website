<script lang="ts">
  import IconCode from "~icons/lucide/code-xml";
  import IconQuote from "~icons/lucide/text-quote";
  import IconUser from "~icons/lucide/user";
  import IconSend from "~icons/lucide/send";

  interface Props {
    currentPath?: string;
  }

  let { currentPath = "/" }: Props = $props();

  const links = [
    { name: "projects", href: "/projects", icon: IconCode },
    { name: "blog", href: "/blog", icon: IconQuote },
    { name: "about", href: "/about", icon: IconUser },
    { name: "contact", href: "/contact", icon: IconSend },
  ];
</script>

<header class="bg-bg/80 sticky top-0 z-50 border-b backdrop-blur-md">
  <nav class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
    <a
      href="/"
      class="text-primary hover:text-accent text-xl font-bold transition-colors"
      aria-label="Home"
    >
      pedro
    </a>

    <div class="hidden gap-6 font-mono text-sm md:flex">
      {#each links as { name, href } (name)}
        {@const isActive = currentPath.startsWith(href)}
        <a
          {href}
          aria-label={name}
          class="group flex transition-colors {isActive
            ? 'text-primary'
            : 'text-muted'}"
        >
          <span class="select-none">[</span>
          <span
            class="px-0.5 {isActive
              ? 'text-fg'
              : 'text-fg-muted group-hover:text-fg'}"
          >
            {name}
          </span>
          <span class="select-none">]</span>
        </a>
      {/each}
    </div>

    <div class="flex gap-4 font-mono text-sm md:hidden">
      {#each links as { name, href, icon: Icon } (name)}
        {@const isActive = currentPath.startsWith(href)}
        <a
          {href}
          aria-label={name}
          class="flex items-center transition-all {isActive
            ? 'text-primary'
            : 'text-muted'}"
        >
          {#if isActive}
            <span class="select-none">[</span>
            <div class="flex items-center px-1">
              <span class="text-fg">{name}</span>
            </div>
            <span class="select-none">]</span>
          {:else}
            <div
              class="hover:bg-bg-soft flex h-8 w-8 items-center justify-center rounded-sm transition-colors"
            >
              <Icon class="h-[1.2em] w-[1.2em]" />
            </div>
          {/if}
        </a>
      {/each}
    </div>
  </nav>
</header>
