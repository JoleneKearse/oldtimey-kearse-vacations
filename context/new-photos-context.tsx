"use client";

import { createContext, use, useContext, useState, type ReactNode } from "react";

type NewPhotosContextValue = {
    hasNewPhotos: boolean;
    setHasNewPhotos: (value: boolean) => void;  
};

const NewPhotosContext = createContext<NewPhotosContextValue | undefined>(undefined);

export function NewPhotosProvider({ children }: { children: ReactNode }) {
    const [hasNewPhotos, setHasNewPhotos] = useState(false);

    return (
        <NewPhotosContext.Provider value={{ hasNewPhotos, setHasNewPhotos }}>
            {children}
        </NewPhotosContext.Provider>
    );
}

export function useNewPhotos() {
    const context = useContext(NewPhotosContext);
    if (!context) {
        throw new Error("useNewPhotos must be used within a NewPhotosProvider");
    }
    return context;
}