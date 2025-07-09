import "./globals.css";

import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Header } from '@/components/Header';
import { SearchProvider } from "@/context/SearchContext";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export const metadata = {
  title: 'InstaSplash',
  icons: {
    icon: '/favicon.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <SearchProvider>
          <FavoritesProvider>
            <Header />
            <ScrollToTop />
            <main className="flex-grow mb-10">
              {children}
            </main>
            <Footer />
          </FavoritesProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
