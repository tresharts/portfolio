function Header() {
    return (
        <header className="sticky top-0 z-50 border-b-4 border-[#1a1a1a] bg-[#f5f0e8]">
            <nav className="mx-auto flex w-full justify-between items-center px-6 py-3 font-head">
                <a href="#" className="font-black text-2xl tracking-tighter text-[#1a1a1a]">
                    ARTHUR_DEV
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    <a href="#sobre" className="px-2 py-1 text-sm uppercase hover:text-[#ffcc00]">
                        Sobre
                    </a>
                    <a href="#skills" className="px-2 py-1 text-sm uppercase hover:text-[#ffcc00]">
                        Skills
                    </a>
                    <a href="#projetos" className="px-2 py-1 text-sm uppercase hover:text-[#ffcc00]">
                        Projetos
                    </a>
                    <a href="#contato" className="px-2 py-1 text-sm uppercase hover:text-[#ffcc00]">
                        Contato
                    </a>
                    <a 
                        href="/ArthurBPGomes.pdf"
                        download="Currículo-ArthurGomes.pdf" 
                        className="
                            border-[3px] border-[#1a1a1a] 
                            bg-[#ffcc00] 
                            px-4 py-3 
                            text-sm font-bold uppercase 
                            shadow-[4px_4px_0_#1a1a1a]
                            transition-all duration-150
                            active:translate-x-1 active:translate-y-1 active:shadow-none
                            focus-visible:outline-2 focus-visible:outline-offset-4
                        ">
                        Currículo
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header