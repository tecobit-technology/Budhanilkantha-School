import type { Metadata } from "next";
import { Italianno, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Calligraphic face used only for the wordmark next to the crest.
const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Budhanilkantha School | Center of Excellence",
  description:
    "Budhanilkantha School (CEEB Code: 689070), located in Kathmandu, is the government designated National School of Nepal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${italianno.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}