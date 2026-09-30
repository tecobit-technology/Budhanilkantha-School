import Image from "next/image";
import Link from "next/link";
import {
  contact,
  footerBlurb,
  footerContactBlocks,
  footerLinks,
  socials,
} from "@/lib/site-data";

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white text-white transition hover:bg-white hover:text-[#062A5B]"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="text-white">
      {/* ===== Photo section ===== */}
      {/* clip-path clips the fixed image to this section, so it acts like a
          window: the photo stays put while the content scrolls over it */}
      <div className="relative [clip-path:inset(0)]">
        {/* Fixed background image (does not scroll) */}
        <div className="fixed inset-0 -z-0">
          <Image
            src="/Images/footer.png"
            alt=""
            fill
            className="object-cover"
          />
          {/* Navy Overlay */}
          <div className="absolute inset-0 bg-[#062A5B]/85" />
        </div>

        <div className="relative mx-auto max-w-[1240px] px-6 pb-14 pt-16 lg:pt-20">
          {/* Centered logo */}
          <Link href="/" className="mx-auto mb-14 block w-fit lg:mb-16">
            <Image
              src="/Images/logo.png"
              alt="Crestwood Academy"
              width={110}
              height={110}
              className="rounded-md bg-white p-1.5"
            />
          </Link>

          {/* Columns */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {/* Contact blocks (from site-data) */}
            {footerContactBlocks.map((block) => (
              <div key={block.heading}>
                <h3 className="mb-6 text-[18px] font-bold uppercase leading-tight tracking-wide text-white">
                  {block.heading}
                </h3>

                <div className="space-y-5">
                  {block.lines.map((line) => (
                    <div key={line.label}>
                      <p className="text-[15px] font-light text-white">
                        {line.label}
                      </p>
                      <a
                        href={line.href}
                        className="break-words text-[15px] font-bold text-white hover:underline"
                      >
                        {line.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Useful Links */}
            <div>
              <h3 className="mb-6 text-[18px] font-bold uppercase leading-tight tracking-wide text-white">
                Useful Links
              </h3>

              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] font-bold uppercase text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social icons, centered */}
          <div className="mt-14 flex justify-center gap-3">
            <SocialButton href={socials.facebook} label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M15.1 8.4h-2.2V7c0-.7.5-.9.8-.9h1.4V3.6h-2c-2.3 0-2.8 1.7-2.8 2.8v2H9v2.6h1.3V20h2.6v-9h2l.2-2.6z" />
              </svg>
            </SocialButton>

            <SocialButton href={socials.linkedin} label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M6.9 8.5H4.3V20h2.6V8.5zM5.6 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM20 13.6c0-3-1.6-4.4-3.7-4.4-1.7 0-2.5 1-2.9 1.6V8.5H10.8V20h2.6v-6.2c0-1.3.6-2.1 1.7-2.1 1 0 1.5.7 1.5 2.1V20H20v-6.4z" />
              </svg>
            </SocialButton>

            <SocialButton href={socials.youtube} label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15.2V8.8l5.2 3.2-5.2 3.2z" />
              </svg>
            </SocialButton>
          </div>
        </div>
      </div>

      {/* ===== Solid navy bottom bar ===== */}
      <div className="bg-[#062A5B]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-6 pb-10 pt-7 text-[13px] font-light leading-7 md:flex-row md:justify-between md:gap-10">
          <div className="max-w-[620px]">
            <p>{footerBlurb}</p>
            <p className="mt-2">
              {contact.address} &middot;{" "}
              <a
                href={`mailto:${contact.email}`}
                className="hover:underline"
              >
                {contact.email}
              </a>
            </p>
          </div>

          <p className="md:text-right">
            © {new Date().getFullYear()} Crestwood Academy. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}