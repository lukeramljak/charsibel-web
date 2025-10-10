<script lang="ts">
  import SocialLinks from "$lib/components/social-links.svelte";
</script>

<main>
  <img src="/logo.png" alt="Charsibel logo" class="logo" />
  <SocialLinks />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 2rem;
    margin: 0 auto;
    max-width: 500px;
  }

  .logo {
    display: block;
    max-width: 100%;
  }
</style>
