'use client'

import { useEffect, useState } from "react";
import { PhotoCard } from "@/components/PhotoCard";
import { useFavorite } from "@/context/FavoritesContext";
import { SkeletonGallery } from "@/components/SkeletonGallery";

export default function Favoritos() {
  const { favorites } = useFavorite();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <SkeletonGallery />;


  return (
    <main className="mt-52 xl:mt-40 md:mt-54">
      <section
        className={`${favorites.length === 0
          ? "flex flex-grow justify-center gap-6 px-0 md:px-4"
          : "w-full grid gap-6 px-0 md:px-12 grid-cols-1 xl:grid-cols-3 md:grid-cols-1"
          }`}>
        {favorites.length !== 0 ? (
          favorites.map(favorite => (
            <PhotoCard key={favorite.id} photo={favorite} />
          ))
        ) : (
          <p className="text-gray-500 text-center mt-8">
            Você ainda não favoritou nenhuma imagem. <br />
            Explore a galeria e clique no <span className="text-red-500">❤️</span> para salvar suas favoritas!
          </p>
        )}
      </section>
    </main>
  );
}
