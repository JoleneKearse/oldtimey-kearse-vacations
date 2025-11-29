import type { Metadata } from "next";
import { Londrina_Sketch, Noto_Sans } from "next/font/google";
import "./globals.css";

const sketch = Londrina_Sketch({
  weight: "400",
  subsets: ["latin"],
});

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
        className={`${sketch.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
