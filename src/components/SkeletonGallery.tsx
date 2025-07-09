'use client'

import { Skeleton } from 'primereact/skeleton';

type Props = {
  count?: number;
};

export function SkeletonGallery({ count = 6 }: Props) {
  return (
    <div className="mb-4 mt-52 xl:mt-40 md:mt-54 grid gap-6 px-0 md:px-12 grid-cols-1 xl:grid-cols-3 md:grid-cols-1">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="rounded-xl overflow-hidden shadow-md">
          <Skeleton height="320px" className="mb-2" />
          <div className="p-3">
            <Skeleton width="80%" className="mb-2" />
            <Skeleton width="60%" />
          </div>
        </div>
      ))}
    </div>
  );
}
