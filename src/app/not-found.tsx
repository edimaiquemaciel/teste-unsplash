'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Página não encontrada</h1>
      <p className="text-lg text-gray-700 mb-6">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link href="/" className="text-blue-500 hover:underline text-lg">
        Voltar para a Home
      </Link>
    </div>
  );
}
