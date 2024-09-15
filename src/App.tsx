import logo from "@/assets/logo.png";

const SocialLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-12 items-center justify-center w-full rounded-lg bg-background font-bold text-primary transition-all duration-100 [box-shadow:5px_5px_rgb(255_149_147)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(255_149_147)]"
    >
      {label}
    </a>
  );
};

const App = () => {
  return (
    <main className="flex items-center flex-col">
      <img src={logo} className="p-8" alt="Charsibel logo" />
      <div className="flex flex-col items-center justify-center gap-4 w-3/4 max-w-sm">
        <SocialLink href="mailto:hello@charsibel.com" label="Email" />
        <SocialLink href="https://twitch.tv/charsibel" label="Twitch" />
        <SocialLink
          href="https://instagram.com/_maddieedwards"
          label="Instagram"
        />
        <SocialLink
          href="https://youtube.com/@hellocharsibel"
          label="YouTube"
        />
        <SocialLink href="https://tiktok.com/@charsibel" label="TikTok" />
        <SocialLink href="https://throne.com/charsibel" label="Wishlist" />
        <SocialLink
          href="https://streamlabs.com/charsibel/tip"
          label="Donate"
        />
      </div>
    </main>
  );
};

export default App;
