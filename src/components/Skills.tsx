import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import { 
    SiBootstrap, 
    SiCss, 
    SiDocker, 
    SiFirebase, 
    SiFlyway, 
    SiGit, 
    SiHtml5, 
    SiMysql, 
    SiNextdotjs, 
    SiPostgresql, 
    SiReact, 
    SiShadcnui, 
    SiSpring, 
    SiTailwindcss, 
    SiTypescript, 
} from "react-icons/si";

type Tech = {
    name: string
    Icon: IconType
}

const techs: Tech[] = [
    { name: 'HTML', Icon: SiHtml5 },
    { name: 'CSS', Icon: SiCss },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'Bootstrap', Icon: SiBootstrap },
    { name: 'Tailwind CSS', Icon: SiTailwindcss },
    { name: 'shadcn/ui', Icon: SiShadcnui },
    { name: 'React', Icon: SiReact },
    { name: 'Next.js', Icon: SiNextdotjs },
    { name: 'Java', Icon: FaJava },
    { name: 'Spring', Icon: SiSpring },
    { name: 'Firebase', Icon: SiFirebase },
    { name: 'MySQL', Icon: SiMysql },
    { name: 'PostgreSQL', Icon: SiPostgresql },
    { name: 'Git', Icon: SiGit },
    { name: 'Docker', Icon: SiDocker },
    { name: 'Flyway', Icon: SiFlyway },
]

function Skills() {
    return (
        <section 
            id="skills"
            className="border-b-4 border-[#1a1a1a] bg-[#1a1a1a] px-2 py-5"
        >
            <h2 className="sr-only">Tecnologias</h2>

            <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 md:gap-x-5">
                {techs.map(({ name, Icon }) => (
                    <li 
                        key={name}
                        tabIndex={0}
                        className="group flex w-16 flex-col items-center gap-2 outline-none mt-3"
                    >
                        <Icon 
                            aria-hidden="true"
                            className="
                                size-8 text-[#f5f0e8] 
                                transition-transform duration-200 
                                group-hover:scale-125
                                group-focus:scale-125
                                md:size-10
                            "
                        />

                        <span 
                            className="
                                whitespace-nowrap font-head text-xs font-bold uppercase
                                text-[#f5f0e8] opacity-0
                                transition-opacity duration-200
                                group-hover:opacity-100
                                group-focus:opacity-100
                            ">
                                {name}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Skills