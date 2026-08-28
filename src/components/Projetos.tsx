import boraMei from '../assets/bora-mei.webp'
import apLIS from '../assets/apLIS.webp'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

type Project = {
    title: string
    category: string
    description: string
    techs: string[]
    image: string
    repositoryUrl: string
}

const projects: Project[] = [
    {
        title: 'BoraMEI',
        category: 'Fullstack',
        description: 'Plataforma de gestão financeira para microempreendedores, com controle de movimentações, categorias, dashboard e alertas',
        techs: [
            'React',
            'TypeScript',
            'Java',
            'Spring Boot',
            'PostgreSQL',
        ],
        image: boraMei,
        repositoryUrl: "https://github.com/tresharts/bora-mei",
    },
    {
        title: 'Painel Clínico',
        category: 'Teste Técnico',
        description: 'Aplicação fullstack com React integrada a APIs independentes em Node.js e PHP, banco MySQL compartilhado e execução com Docker Compose.',
        techs: [
            'React',
            'Node.js',
            'PHP',
            'MySQL',
            'Docker',
        ],
        image: apLIS,
        repositoryUrl: "https://github.com/tresharts/apLIS-desenvolvedor-jr",
    }
]

const cardColors = [
    'bg-[#e63b2e] text-[#f5f0e8]', 
    'bg-[#0055ff] text-[#f5f0e8]', 
    'bg-[#ffcc00] text-[#1a1a1a]', 
]

function Projetos() {
    return (
        <section
            id='projetos'
            className='border-b-4 border-[#1a1a1a] bg-[#f5f0e8] px-6 py-10'
        >
            <div className='mx-auto max-w-7xl mb-7'>
                <h2 className='mb-9 font-head text-4xl font-black uppercase tracking-tighter md:text-5xl'>
                    Meus{' '}
                    <span className='text-[#0055ff]'>Projetos</span>
                </h2>

                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className={`
                                group flex flex-col border-[3px] border-[#1a1a1a] p-6 shadow-[6px_6px_0_#1a1a1a] 
                                transition-all duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0_#1a1a1a]
                                ${cardColors[index % cardColors.length]}
                            `}>
                            <div className='relative mb-6 aspect-video overflow-hidden border-[3px] border-[#1a1a1a]'>
                                <img 
                                    src={project.image} 
                                    alt={`Dashboard do projeto ${project.title}`}
                                    className='h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0' 
                                />

                                <span className='absolute right-2 top-2 border-2 border-[#1a1a1a] bg-[#f5f0e8] px-2 py-1 font-bold 
                                font-head text-xs font-bold uppercase text-[#1a1a1a]'
                                >
                                    {project.category}
                                </span>
                            </div>

                            <h3 className='mb-2 font-head text-2xl font-bold uppercase'>
                                {project.title}
                            </h3>

                            <p className='mb-6 flex-grow text-sm leading-6 text-current opacity-90'>
                                {project.description}
                            </p>

                            <ul className='mb-6 flex flex-wrap gap-2'>
                                {project.techs.map((tech) => (
                                    <li
                                        key={tech}
                                        className='border border-[#1a1a1a] bg-[#f5f0e8] text-[#1a1a1a] px-2 py-1 text-xs font-bold uppercase'
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>

                            <a 
                                href={project.repositoryUrl}
                                target='_blank'
                                rel='noreferrer'
                                className='w-fit font-head font-bold uppercase text-current hover:underline inline-flex items-center gap-2'
                            >
                                <span>Ver código</span>
                                <FaArrowUpRightFromSquare aria-hidden="true" className='size-4' />
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projetos