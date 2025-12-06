"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type View = "gallery" | "grid";

type ViewContextValue = {
  view: View;
  toggleView: () => void;
  setView: (view: View) => void;
};

const ViewContext = createContext<ViewContextValue | null>(null);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<View>("gallery");

  return (
    <ViewContext.Provider
      value={{
        view,
        toggleView: () => setView(view === "gallery" ? "grid" : "gallery"),
        setView,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("useView must be used within a ViewProvider");
  }
  return context;
}
