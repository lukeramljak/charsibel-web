import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const SocialLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Button asChild className="w-full h-16 rounded-[24px]">
      <a href={href} target="_blank" rel="noreferrer">
        {label}
      </a>
    </Button>
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
        <SocialLink href="https://throne.com/charsibel" label="Throne" />
      </div>
    </main>
  );
};

export default App;
