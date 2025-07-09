'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';


export function NavBar() {
    const pathname = usePathname();
    const items = [
    { label: 'Página Inicial', url: '/' },
    { label: 'Favoritos', url: '/favorites' }
  ];


  return (
    <nav className="flex items-center justify-between w-[220px] min-[1280px]:w-[220px]">
        {items.map(item => {
            const isActive = pathname === item.url;

            return(
                <ul  key={item.url}>
                    <li>
                        <Link 
                        href={item.url}
                        className={`pt-1 border-b-2 font-medium ${isActive ? 'border-b-2 border-[#3c69e7] text-[#3c69e7]' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`} > {item.label}
                    </Link>
                    </li>
                </ul>
            )
        })}
    </nav>
  )
}
