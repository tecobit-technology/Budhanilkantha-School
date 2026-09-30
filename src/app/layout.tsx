import type { Metadata } from "next";
import { Open_Sans, Oswald } from "next/font/google";
import RevealBootstrap from "@/components/RevealBootstrap";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Condensed uppercase display face for hero/section headings.
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crestwood Academy | Center of Excellence",
  description:
    "Crestwood Academy (CEEB Code: 689070), located in Kathmandu, is the government designated National School of Nepal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Gates the scroll-reveal hidden state so content is never briefly
            visible before hydration. Runs before first paint. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js-reveal')",
          }}
        />
      </head>
      <body className={`${openSans.variable} ${oswald.variable} font-sans antialiased`}>
        <RevealBootstrap />
        {children}
      </body>
    </html>
  );
}
