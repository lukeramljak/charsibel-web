<script lang="ts">
  import Donate from "$lib/icons/donate.svelte";
  import Email from "$lib/icons/email.svelte";
  import Instagram from "$lib/icons/instagram.svelte";
  import Tiktok from "$lib/icons/tiktok.svelte";
  import Twitch from "$lib/icons/twitch.svelte";
  import Wishlist from "$lib/icons/wishlist.svelte";
  import Youtube from "$lib/icons/youtube.svelte";
  import type { Component } from "svelte";

  interface Link {
    href: string;
    label: string;
    icon: Component;
    ariaLabel: string;
  }

  const links: Link[] = [
    {
      href: "mailto:hello@charsibel.com",
      label: "Email",
      icon: Email,
      ariaLabel: "Send an email to Charsibel",
    },
    {
      href: "https://twitch.tv/charsibel",
      label: "Twitch",
      icon: Twitch,
      ariaLabel: "Watch Charsibel on Twitch",
    },
    {
      href: "https://instagram.com/_maddieedwards",
      label: "Instagram",
      icon: Instagram,
      ariaLabel: "View Charsibel's Instagram",
    },
    {
      href: "https://youtube.com/@hellocharsibel",
      label: "YouTube",
      icon: Youtube,
      ariaLabel: "Watch Charsibel's YouTube videos",
    },
    {
      href: "https://tiktok.com/@charsibel",
      label: "TikTok",
      icon: Tiktok,
      ariaLabel: "View Charsibel's TikTok",
    },
    {
      href: "https://throne.com/charsibel",
      label: "Wishlist",
      icon: Wishlist,
      ariaLabel: "View Charsibel's wishlist on Throne",
    },
    {
      href: "https://streamlabs.com/charsibel/tip",
      label: "Donate",
      icon: Donate,
      ariaLabel: "Donate to Charsibel via Streamlabs",
    },
  ];
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<nav aria-label="Social links">
  <ul>
    {#each links as link (link.href)}
      <li>
        <a
          href={link.href}
          rel="external noopener noreferrer"
          target="_blank"
          aria-label={link.ariaLabel}
        >
          <div class="icon" aria-hidden="true">
            <link.icon />
          </div>
          <span>{link.label}</span>
          <span class="sr-only">
            {link.href.startsWith("mailto:")
              ? "(opens your email client)"
              : "(opens in a new tab)"}
          </span>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    width: 100%;
    max-width: 400px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    margin: 0;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: var(--radius);
    background-color: var(--background);
    font-weight: 700;
    text-decoration: none;
    color: var(--primary);
    transition: all 150ms ease;
    box-shadow: 5px 5px var(--primary);

    &:hover {
      background-color: var(--primary);
      color: var(--background);
      transform: translateY(-2px);
      box-shadow: 7px 7px var(--primary);
    }

    &:focus {
      outline: 2px solid var(--primary);
      outline-offset: 3px;
    }

    &:active {
      transform: translate(3px, 3px);
      box-shadow: 0 0 var(--primary);
    }
  }

  .icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  @media (prefers-reduced-motion: reduce) {
    a {
      transition: none;
    }
  }
</style>
