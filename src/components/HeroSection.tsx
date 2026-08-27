import heroImage from '../assets/arthur.webp'

function HeroSection() {
    return (
        <section 
            id='sobre' 
            className='flex min-h-[calc(100svh-84px)] items-center overflow-hidden border-b-4 border-[#1a1a1a] bg-[#f5f0e8] px-6 py-10'
        >
            <div className='mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2'>
                <div className='space-y-6'>
                    <h1 className='font-head text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-6xl'>
                        <span className='block'>arthur</span>
                        <span className='block mt-1 mb-1 text-[#0055ff]'>p.</span>
                        <span>gomes</span>
                    </h1>

                    <div className='space-y-6'>
                        <p className='max-w-xl border-1-4 border-[#0055ff] pl-1 text-base font-medium leading-7 md:text-lg'>
                            Desenvolvedor Fullstack especializado em Java e Spring no backend,
                            com experiência em arquitetura de sistemas, desenvolvimento de APIs e construção
                            de soluções escaláveis e bem estruturadas. Também atuo com React e TypeScript no
                            frontend, com experiência no desenvolvimento de interfaces, componentização e
                            integração com APIs, atualmente me aprofundando em Next.js.
                        </p>
                        <p className='max-w-lg text-sm leading-6 text-[#4a4a4a] pl-1 md:text-base'>
                            Busco construir soluções bem estruturadas, escaláveis e fáceis de manter, valorizando
                            boas decisões de arquitetura e qualidade de código.
                        </p>
                    </div>
                </div>

                <div className='aspect-square w-[90%] overflow-hidden border-4 border-[#1a1a1a] shadow-[6px_6px_0_#1a1a1a] justify-self-center md:justify-self-end'>
                    <img 
                        src={heroImage} 
                        alt="Foto do Arthur"
                        className='h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0' 
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection