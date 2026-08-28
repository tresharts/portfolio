type Exp = {
    company: string
    role: string
    period: string 
    startDate: string
    summary: string 
    highlights: string[]
    techs: string[]
}

const experiences: Exp[] = [
    {
        company: 'Fifteen Miles',
        role: 'Engenheiro de Software',
        period: 'Maio de 2026 - Presente',
        startDate: '2026-05',
        summary: 'Atuação no desenvolvimento e evolução de sistemas em estágio inicial, contribuindo para decisões técnicas e para a estruturação do ambiente e dos processos de desenvolvimento',
        highlights: [
            'Desenvolvimento de aplicaçÕes web com autenticação e novas funcionalidades.',
            'Participação em decisões técnicas e arquiteturais desde a fase inicial do produto.',
            'Padronização e automação do ambiente, além da correção de bugs, lint e tipagem.',
            'Organização, correção e atualização da documentação técnica.',
        ],
        techs: ['Next.js', 'React', 'TypeScript', 'Firebase'],
    },
]

function Experiencia() {
    return (
        <section
            id="historico"
            className="border-b-4 border-[#1a1a1a] bg-[#f5f0e8] px-6 py-12"
        >
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-10 font-head text-4xl font-black uppercase tracking-tighter md:text-5xl">
                    Experiência{' '}
                    <span className="text-[#0055ff]">Profissional</span>
                </h2>

                <div className="ml-3 border-l-4 border-[#1a1a1a] pl-8 md:pl-12">
                    {experiences.map((experience) => (
                        <article
                            key={`${experience.company}-${experience.role}`}
                            className="relative"
                        >
                            <span
                                aria-hidden="true"
                                className="absolute -left-[46px] top-1 size-6 border-[3px] border-[#1a1a1a] bg-[#ffcc00] md:-left-[62px]"
                            />

                            <div className="mb-3 flex flex-col gap-1 md:flex-row md:gap-4">
                                <h3 className="font-head text-2xl font-bold uppercase md:text-3xl">
                                    {experience.role}
                                </h3>

                                <span className="font-head text-lg font-bold text-[#e63b2e] mt-[3px]">
                                    @ {experience.company}
                                </span>
                            </div>

                            <time 
                                dateTime={experience.startDate}
                                className="mb-6 block font-head text-sm font-bold uppercase tracking-widest text-[#4a4a4a]"
                            >
                                {experience.period}
                            </time>

                            <p className="mb-6 max-w-3xl text-base leading-7">
                                {experience.summary}
                            </p>

                            <ul className="mb-6 max-w-3xl list-disc space-y-3 pl-5 marker:text-[#0055ff]">
                                {experience.highlights.map((highlight) => (
                                    <li key={highlight} className="leading-6">
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            <ul className="flex flex-wrap gap-2">
                                {experience.techs.map((tech) => (
                                    <li
                                        key={tech}
                                        className="border border-[#1a1a1a] bg-[#ffcc00] px-2 py-1 text-xs font-bold uppercase"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experiencia