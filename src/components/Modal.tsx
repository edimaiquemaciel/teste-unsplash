'use client';

import { Dialog } from 'primereact/dialog';
import { Image as PrimeImage } from 'primereact/image';
import { Photo } from '../types/photo';
import NextImage from 'next/image';

type ModalProps = {
  photo: Photo;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Modal({ photo, visible, setVisible }: ModalProps) {
  const icon = (<i className="pi pi-arrow-down-left-and-arrow-up-right-to-center text-2xl"></i>);

  const header = (
    <div className="flex items-start space-x-3">
      <NextImage
        src={photo.user.profile_image.medium}
        alt={`Foto de perfil de ${photo.user.name}`}
        width={40}
        height={40}
        className="rounded-full shadow-sm"
      />
      <div className='flex flex-col items-start'>
        <p className="font-semibold">{photo.user.name}</p>
        <a
        href={`https://unsplash.com/@${photo.user.username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[12px] text-blue-600 hover:underline ml-1 -mt-1"
        >
        Ver perfil
      </a>
      </div>
    </div>
  );

  return (
    <>
      <Dialog
        header={header}
        visible={visible}
        onHide={() => setVisible(false)}
        className="w-[90vw] h-[90vh] md:w-[80vw]"
        dismissableMask
      >
        <div className="flex flex-col justify-center items-center space-y-4 px-0 mt-4 md:px-6">
          <PrimeImage
            imageClassName="w-[500px] md:w-full md:w-[450px] md:h-[550px] object-cover"
            src={photo.urls.regular}
            alt={photo.alt_description || 'Imagem com preview'}
            preview
            zoomSrc={photo.urls.full}
            indicatorIcon={icon}
            loading='lazy'
          />

          {photo.description && (
            <p className="text-sm text-gray-600 text-center w-full md:w-2xl"><strong>Descrição:</strong> {photo.description}</p>
          )}
        </div>
      </Dialog>
    </>
  );
}
