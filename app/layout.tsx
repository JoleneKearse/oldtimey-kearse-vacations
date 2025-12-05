import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// TODO: I think I should change this all to NotoSans, instead of sketch, like I have on body.
const notoSans = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kearse Vacation Photos",
  description: "Digitized photos from our old albums to view on the interwebs and even download!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} text-stone-950 antialiased bg-stone-200 dark:bg-stone-900 dark:text-stone-200`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
