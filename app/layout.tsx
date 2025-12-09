import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import { NewPhotosProvider } from "@/context/new-photos-context";
import { ViewProvider } from "@/context/view-context";
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
        className={`${notoSans.className} min-h-screen flex flex-col text-stone-950 antialiased bg-stone-200 dark:bg-stone-900 dark:text-stone-200`}
      >
        <ThemeProvider>
          <ViewProvider>
            <NewPhotosProvider>
              <Header />
              <main className="flex grow">{children}</main>
              {/* {children} */}
            </NewPhotosProvider>
          </ViewProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
