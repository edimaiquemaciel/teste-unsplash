'use client'

import { fetchSearchPhotos, fetchRandomPhotos } from "@/lib/unsplash-api";
import { Photo } from "@/types/photo"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

type SearchContextType = {
    photos:Photo[];
    searchPhotos: (query: string) => Promise<{ success: boolean; error?: string }>;
    setPhotos: React.Dispatch<React.SetStateAction<Photo[]>>;
    error: string;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    hasSearched: boolean;
    setHasSearched: React.Dispatch<React.SetStateAction<boolean>>;
    submittedQuery: string;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({children}: {children: ReactNode}) {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [error, setError] = useState("");
    const [query, setQuery] =  useState("");
    const [hasSearched, setHasSearched] = useState(false);
    const [submittedQuery, setSubmittedQuery] = useState("");

    const pathname = usePathname();

    useEffect(() => {
    if (pathname !== '/') {
        setHasSearched(false);
        setSubmittedQuery('');
        setQuery('');
    }
    }, [pathname]);


    useEffect(() => {
        if (!hasSearched) {
            fetchRandomPhotos()
            .then(data => {
                setPhotos(data);
                setError("");
            })
            .catch((error: unknown) => {
                const errorMessage = error instanceof Error
                ? error.message
                : "Erro ao buscar imagens aleatórias.";

                console.error("Erro ao buscar imagens aleatórias:", errorMessage);
                setError(errorMessage);
            });
        }
    }, [hasSearched]);


    const searchPhotos = async (queryString: string): Promise<{ success: boolean; error?: string }> => {
        try {
            const res  = await fetchSearchPhotos(queryString);
            setPhotos(res);
            setQuery(queryString);
            setSubmittedQuery(queryString);
            setError("");
            setHasSearched(true);
            return { success: true };
        } catch (error) {
            const message = error instanceof Error ? error.message : "Erro ao buscar fotos";
            console.error("Erro ao buscar fotos:", message);
            setError(message);
            return { success: false, error: message };
        }
    };


    return(
        <SearchContext.Provider value={{photos, error, setPhotos, searchPhotos, query, setQuery, hasSearched, setHasSearched, submittedQuery}}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch() {
    const context = useContext(SearchContext);
    if(!context) {
         throw new Error("Erro ao no useSearch, por favor")
    }
    return context;
}

