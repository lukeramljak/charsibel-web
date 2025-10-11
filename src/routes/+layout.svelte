<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<main class="mx-auto flex max-w-[500px] flex-col items-center gap-8 p-4">
  {@render children?.()}
</main>
