"use client";

import { useTheme } from "@/context/theme-context";
import { useNewPhotos } from "@/context/new-photos-context";
import Link from "next/link";
import { Londrina_Sketch } from "next/font/google";
import Button from "./Button";

const sketch = Londrina_Sketch({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { hasNewPhotos } = useNewPhotos();

  return (
    <header className="flex items-center justify-between  p-12 w-full">
      <h1
        className={`font-extrabold text-4xl leading-tight ${sketch.className} bg-blue-500 rounded-full shadow-2xl shadow-amber-300/75 ${hasNewPhotos && "animate-pulse px-6 py-2"}`}
      >
        {hasNewPhotos ? "New" : ""}
      </h1>
      <div className="flex justify-center gap-6">
        <Link href="/grid" className="mt-2">
          <Button tooltip="Grid view">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </Button>
        </Link>
        {theme === "light" ? (
          <Button tooltip="Dark mode" onClick={toggleTheme}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </Button>
        ) : (
          <Button tooltip="Light mode" onClick={toggleTheme}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
