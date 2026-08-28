function Header() {
    return (
        <header className="sticky top-0 z-50 border-b-4 border-[#1a1a1a] bg-[#f5f0e8]">
            <nav className="mx-auto flex w-full justify-between items-center px-6 py-3 font-head">
                <a href="#" className="font-black text-2xl tracking-tighter text-[#1a1a1a]">
                    ARTHUR_DEV
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    <a href="#contato" className="px-2 py-1 text-sm uppercase hover:text-[#ffcc00] transition-colors duration-200">
                        Contato
                    </a>
                    <a 
                        href="/ArthurBPGomes.pdf"
                        download="Currículo-ArthurGomes.pdf" 
                        className="
                            neo-button 
                            bg-[#ffcc00] 
                            px-4 py-3 
                            text-sm font-bold uppercase
                        ">
                        Currículo
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header