import React from "react";
import { useLoader } from "../Context/LoaderContext";

export default function Loader() {
    const { isLoading } = useLoader();

    if (!isLoading) {
        return null;
    }

    return (
        <div className="loader-overlay">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}