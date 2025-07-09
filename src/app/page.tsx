'use client'

import { PhotoCard } from "@/components/PhotoCard";
import { useSearch } from "@/context/SearchContext";
import { useEffect, useState } from 'react';
import { SkeletonGallery } from "@/components/SkeletonGallery";


export default function Home() {
  const { photos, error, submittedQuery, hasSearched  } = useSearch();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(photos.length === 0 && !error);
  }, [photos, error]);

  if (loading) return <SkeletonGallery />

  return (
    <div className="mb-4 mt-52 xl:mt-40 md:mt-54">
      {hasSearched && submittedQuery && photos.length > 0 && (
        <h5 className="mb-4 mx-12 text-lg">
          Resultados de busca para: <strong>{submittedQuery}</strong>
        </h5>
      )}

      {hasSearched && photos.length === 0 && !error && (
        <p className="text-gray-500 text-center mt-8">
          Nenhum resultado encontrado para: <strong>{submittedQuery}</strong>
        </p>
      )}

      {error && (
        <p className="text-red-500 text-center mt-8">{error}</p>
      )}

      <section
        className={`${
          photos.length === 0
            ? "flex flex-grow justify-center gap-6 px-0 md:px-4"
            : "grid gap-6 px-0 md:px-12 grid-cols-1 xl:grid-cols-3 md:grid-cols-1"
        }`}
      >
        {photos.length !== 0 ? (
          photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))
        ) : (
          <p className="text-gray-500 text-center mt-8">{error}</p>
        )}
      </section>
    </div>
  );
}
