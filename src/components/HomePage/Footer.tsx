import Image from "next/image";
import Link from "next/link";
import { contact, footerBlurb, footerLinks, socials } from "@/lib/site-data";

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
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/25 text-white transition-colors hover:bg-white hover:text-[#3aa94f]"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#3aa94f] text-white">
      <div className="mx-auto grid max-w-[1150px] gap-12 px-4 py-14 md:grid-cols-3">
        <div>
          <Image
            src="/Images/logo.png"
            alt="Budhanilkantha School logo"
            width={52}
            height={52}
            className="mb-5 h-[52px] w-[52px] rounded-sm bg-white/90 p-1"
          />
          <p className="max-w-[340px] text-[14px] leading-[1.9]">{footerBlurb}</p>
        </div>

        <div>
          <h3 className="mb-5 text-[17px] font-bold">Useful links</h3>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-[15px] transition-opacity hover:opacity-75"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                    <path d="M9 6l6 6-6 6z" />
                  </svg>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-[17px] font-bold">Address</h3>
          <div className="space-y-4 text-[14px] leading-[1.8]">
            <p>{contact.address}</p>
            <p>
              <a href={`mailto:${contact.email}`} className="hover:underline">
                {contact.email}
              </a>
            </p>
            <p>{contact.accountLine}</p>
          </div>

          <div className="mt-6 flex gap-3">
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

      <div className="border-t border-white/25">
        <div className="mx-auto max-w-[1150px] px-4 py-5 text-[13px]">
          © {new Date().getFullYear()} Budhanilkantha School, All rights reserved.
        </div>
      </div>
    </footer>
  );
}