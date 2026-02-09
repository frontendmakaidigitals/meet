import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Baskervville,
  Inter,
  Allura,
} from "next/font/google";
import "./globals.css";
import { Header } from "./header/header";
import Footer from "./footer/footer";
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
  variable: "--font-baskervville",
  subsets: ["latin"],
});
const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Meet - Middle East Engineering Technologies",
  description:
    "Middle East Engineering Technologies (MEET) is a global B2B trading and solutions company. We work with trusted international partners to supply practical products that support business growth while encouraging responsible use of resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${baskervville.variable} ${allura.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
