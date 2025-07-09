'use client'

import { Photo } from "@/types/photo";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type FavoritesContextType = {
    favorites: Photo[];
    toggleFavorite: (photo: Photo) => void;
    isFavorite: (photoId: string) => boolean;
    error: string | null;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'instasplash_favorites';

export function FavoritesProvider({children}: {children: ReactNode}) {
    const [favorites, setFavorites] = useState<Photo[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (stored) {
                setFavorites(JSON.parse(stored));
            }
            setError(null);
        } catch (err) {
            console.error("Erro ao carregar favoritos", err);
            setError("Falha ao carregar favoritos");
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites));
            setError(null);
        } catch (err) {
            console.error("Erro ao salvar favoritos", err);
            setError("Falha ao salvar favoritos");
        }
    }, [favorites]);

    const toggleFavorite = (photo: Photo) => {
        setFavorites(prev => {
            const exists = prev.find(f => f.id === photo.id);
            if (exists) {
                return prev.filter(f => f.id !== photo.id);
            } else {
                return [...prev, photo];
            }
        });
    }

    const isFavorite = (photoId: string) => {
        return favorites.some(f => f.id === photoId);
    }

    return (
        <FavoritesContext.Provider value={{favorites, toggleFavorite, isFavorite, error}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavorite() {
    const context = useContext(FavoritesContext);
    if(!context) {
        throw new Error("Erro ao no useFavorite, por favor verifique");
    }
    return context;
}
