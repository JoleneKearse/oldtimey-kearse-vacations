import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { NewPhotosProvider } from "@/context/new-photos-context";
import Header from "@/components/Header";

const notoSans = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kearse Vacation Photos",
  description:
    "Digitized photos from our old albums to view on the interwebs and even download!",
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
        <NewPhotosProvider>
          <Header />
          {children}
        </NewPhotosProvider>
      </body>
    </html>
  );
}
