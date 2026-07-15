import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Baskervville,
  Inter,
  Allura,
  Rubik,
} from "next/font/google";
import "./globals.css";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const baskervville = Baskervville({
  variable: "--font-rubik",
  subsets: ["latin"],
});
const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: ["400"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MEET - Commercial Distribution Solutions",
  description:
    "Middle East Engineering Technologies  is a global B2B trading and solutions company. We work with trusted international partners to supply practical products that support business growth while encouraging responsible use of resources",
   verification: {
    google: "-gx1uvI6y2p_pQOnNLYSiqEmH8HvdhurOpGyEvQHJeA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${rubik.variable} ${geistMono.variable} ${inter.variable} ${baskervville.variable} ${allura.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
