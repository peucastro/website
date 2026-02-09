<script lang="ts">
  import { onMount } from "svelte";
  import IconSun from "~icons/lucide/sun";
  import IconMoon from "~icons/lucide/moon";

  let isLight = $state<boolean | null>(null);

  onMount(() => {
    isLight = document.documentElement.classList.contains("light");
  });

  function toggleTheme() {
    const current = isLight ?? false;
    const next = !current;

    isLight = next;
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  }
</script>

<button
  onclick={toggleTheme}
  class="text-muted hover:text-primary transition-colors"
  aria-label="Toggle theme"
>
  {#if isLight}
    <IconSun />
  {:else}
    <IconMoon />
  {/if}
</button>
