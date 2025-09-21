<script lang="ts">
  import logo from "$lib/assets/logo.png";
  import SocialLinks from "$lib/components/social-links.svelte";
</script>

<main>
  <img src={logo} alt="Charsibel logo" class="logo" />
  <SocialLinks />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
  }

  .logo {
    max-width: 100%;
  }
</style>
