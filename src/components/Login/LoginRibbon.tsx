import Image from "next/image";
import Link from "next/link";

export default function LoginRibbon() {
  return (
    <Link
      href="/"
      className="fixed left-0 top-0 z-[9999] block cursor-pointer"
      aria-label="Go to homepage"
    >
      <Image
        src="/Images/ribbon.png"
        alt="Crestwood Academy"
        width={480}
        height={190}
        priority
        className="h-auto w-[480px]"
      />
    </Link>
  );
}