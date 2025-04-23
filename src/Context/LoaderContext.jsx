import React, { createContext, useState, useContext } from "react";

const LoaderContext = createContext();

export function LoaderProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);

    const showLoader = () => setIsLoading(true);
    const hideLoader = () => setIsLoading(false);

    return (
        <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
            {children}
        </LoaderContext.Provider>
    );
}

export function useLoader() {
    return useContext(LoaderContext);
}