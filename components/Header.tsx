"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useTheme } from "@/context/theme-context";
import { useView } from "@/context/view-context";
import { useNewPhotos } from "@/context/new-photos-context";
// import { Londrina_Sketch } from "next/font/google";
import TooltipIcon from "./TooltipIcon";
import SearchBar from "./SearchBar";

// const sketch = Londrina_Sketch({
//   weight: "400",
//   subsets: ["latin"],
// });

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { view, toggleView } = useView();
  const { hasNewPhotos } = useNewPhotos();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tag = e.target.value.toLowerCase();
    const params = new URLSearchParams(searchParams.toString());

    if (tag) {
      params.set("search", tag);
    } else {
      params.delete("search");
    }

    router.push(`/grid?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <header className="flex items-center justify-between  p-8 w-full">
      <h1
        className={`font-extrabold text-4xl leading-tight   ${
          hasNewPhotos && "animate-pulse px-6 py-2"
        }`}
      >
        {hasNewPhotos ? "New" : null}
        {!hasNewPhotos && view === "grid" ? (
          <Suspense fallback={<div>Loading...</div>}>
            <SearchBar handleSearchChange={handleSearchChange} />
          </Suspense>
        ) : null}
      </h1>
      <div className="flex justify-center gap-6">
        {view === "gallery" ? (
          <TooltipIcon tooltip="Grid view">
            <Link
              href="/grid"
              onClick={toggleView}
              className="mt-1 inline-block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="size-6"
              >
                <path
                  fill="currentColor"
                  d="M5 3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v3h5V4zM3 19a2 2 0 0 0 2 2h3v-5H3zm5-9H3v5h5zm10 11a2 2 0 0 0 2-2v-3h-5v5zm2-11h-5v5h5zm0-4a2 2 0 0 0-2-2h-3v5h5zM9 4v5h5V4zm0 17h5v-5H9zm5-11H9v5h5z"
                />
              </svg>
            </Link>
          </TooltipIcon>
        ) : (
          <TooltipIcon tooltip="Gallery view">
            <Link href="/" onClick={toggleView} className="mt-1 inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="size-6"
              >
                <path
                  fill="currentColor"
                  d="M5 3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v11.59l4.29-4.3l2.5 2.5l5-5L20 16V6a2 2 0 0 0-2-2zm4.79 13.21l-2.5-2.5L3 19a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-1.59l-5.21-5.2zM7.5 6A2.5 2.5 0 0 1 10 8.5A2.5 2.5 0 0 1 7.5 11A2.5 2.5 0 0 1 5 8.5A2.5 2.5 0 0 1 7.5 6m0 1A1.5 1.5 0 0 0 6 8.5A1.5 1.5 0 0 0 7.5 10A1.5 1.5 0 0 0 9 8.5A1.5 1.5 0 0 0 7.5 7"
                />
              </svg>
            </Link>
          </TooltipIcon>
        )}
        {theme === "light" ? (
          <TooltipIcon tooltip="Dark mode">
            <div onClick={toggleTheme} className="mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </div>
          </TooltipIcon>
        ) : (
          <TooltipIcon tooltip="Light mode">
            <button onClick={toggleTheme} className="mt-1">
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
            </button>
          </TooltipIcon>
        )}
      </div>
    </header>
  );
};

export default Header;
