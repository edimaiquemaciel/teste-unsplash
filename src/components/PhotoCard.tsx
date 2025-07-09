'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Photo } from '../types/photo';
import { Modal } from './Modal';
import { useFavorite } from '@/context/FavoritesContext';

type Props = {
  photo: Photo;
};

export function PhotoCard({ photo }: Props) {
  const [visible, setVisible] = useState(false);
  const hearttVoid = (<i className="pi pi-heart hover:opacity-15 transition duration-300"></i>);
  const heartFill = (<i className="pi pi-heart-fill hover:opacity-60 transition duration-300 text-red-600"></i>);
  const {isFavorite, toggleFavorite} = useFavorite();

  return (
    <>
      <div
        className="cursor-pointer shadow-sm hover:shadow-lg transition rounded-none md:rounded-xl"
      >
        <Image
          className="h-80 w-full object-cover rounded-none md:rounded-t-xl duration-300"
          onClick={() => setVisible(true)}
          src={photo.urls.regular}
          alt={photo.alt_description || 'Imagem Unsplash'}
          width={800}
          height={600}
          loading="lazy"
          placeholder="blur"
          blurDataURL={photo.urls.thumb}
        />
        <div className="flex justify-between items-center gap-2 space-x-3 my-2 mx-4">
            <div className='flex justify-between items-center gap-4'>
              <Image
                  src={photo.user.profile_image.medium}
                  alt={`Foto de perfil de ${photo.user.name}`}
                  width={40}
                  height={40}
                  className="rounded-full shadow-sm"
                  loading='lazy'
              />
              <span><a className="font-medium hover:underline transition ease-in-out duration-400" href={`https://unsplash.com/@${photo.user.username}`}>{photo.user.name}</a></span>
            </div>
            {isFavorite(photo.id) ? (<button className='cursor-pointer' type='button' onClick={() => toggleFavorite(photo)}>{heartFill}</button>) : <button className='cursor-pointer' type='button' onClick={() => toggleFavorite(photo)}>{hearttVoid}</button>}
        </div>
      </div>

      <Modal photo={photo} visible={visible} setVisible={setVisible} />
      
    </>
  );
}
