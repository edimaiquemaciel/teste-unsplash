
export function Footer() {
    const linkedinIcon = (<i className="pi pi-linkedin"></i>);
  return (
    <footer className="h-[10vh] flex items-center justify-center text-center text-gray-400 text-sm bg-[#3C69E7]">
        <p className="flex gap-1">
            © 2025 <a className="cursor-pointer hover:underline flex gap-1 items-center" href="https://www.linkedin.com/in/edimaique-maciel/">Edimaique Maciel{linkedinIcon}</a> • Imagens via Unsplash
        </p>
    </footer>
  )
}
