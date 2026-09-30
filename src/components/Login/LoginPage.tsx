import Image from "next/image";
import LoginRibbon from "./LoginRibbon";
import LoginCard from "./LoginCard";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background photo */}
      <Image
        src="/Images/hero.png"
        alt=""
        fill
        priority
        className="object-cover"
      />

      <LoginRibbon />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <LoginCard />
      </div>
    </div>
  );
}
