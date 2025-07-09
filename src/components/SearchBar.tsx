'use client'

import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

import { useSearch } from "@/context/SearchContext";
import { useRouter } from 'next/navigation';

export function SearchBar() {
  const {searchPhotos, query, setQuery} = useSearch();
  const router = useRouter();

  const handleSearch = async () => {
    if (query.trim()) {
    const result = await searchPhotos(query.trim());
    if (result.success) {
      router.push('/');
    }
  }
  }

  return (
    <div className="max-[640px]:w-full max-[640px]:flex max-[640px]:justify-center">
        <IconField className="flex justify-center items-center w-[700px]">
          <InputIcon className="pi pi-search hover:opacity-30 transition-all duration-300" onClick={handleSearch}  style={{cursor: "pointer"}}/>
          <InputText 
            placeholder="Pesquisar imagem..." 
            className="w-full shadow-md rounded-full"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            value={query}
            style={{backgroundColor: "#F8F8F8"}}
          />
        </IconField>
    </div>
  )
}
