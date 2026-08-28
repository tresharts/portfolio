import type { SubmitEvent } from "react";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

const contactEmail = 'arthurpgomes.dev@gmail.com'

function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const name = String(formData.get('name') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    const subject = encodeURIComponent(
        `Contato pelo portfólio — ${name}`,
    )

    const body = encodeURIComponent(message)

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
}

function Contato() {
    return (
        <section
            id="contato"
            className="bg-[#0055ff] px-6 py-10 text-[#f5f0e8]"
        >
            <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
                <div>
                    <h2 className="mb-6 font-head text-5xl font-black uppercase leading-none tracking-tighter md:text-6xl">
                        Vamos
                        <br />
                        conversar.
                    </h2>

                    <p className="mb-10 max-w-md text-lg leading-7">
                        Estou disponível para conversar sobre oportunidades, projetos e desenvolvimento de software.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a 
                            href={`mailto:${contactEmail}`}
                            className="neo-button inline-flex items-center gap-2 bg-[#e63b2e] px-5 py-3 font-head font-bold uppercase text-[#1a1a1a]"
                        >
                            <span>Email</span>
                            <FaEnvelope aria-hidden="true" className="size-5 mb-0.5" />
                        </a>

                        <a 
                            href="https://github.com/tresharts"
                            target="_blank"
                            rel="noreferrer"
                            className="neo-button inline-flex items-center gap-2 bg-[#f5f0e8] px-5 py-3 font-head font-bold uppercase text-[#1a1a1a]"
                        >
                            <span>Github</span>
                            <FaGithub aria-hidden="true" className="size-5 mb-0.5" />
                        </a>

                        <a 
                            href="https://linkedin.com/in/arthurpgomes"
                            className="neo-button inline-flex items-center gap-2 bg-[#ffcc00] px-5 py-3 font-head font-bold uppercase text-[#1a1a1a]"
                        >
                            <span>Linkedin</span>
                            <FaLinkedin aria-hidden="true" className="size-5 mb-0.5" />
                        </a>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-8 border-4 border-[#1a1a1a] bg-[#f5f0e8] p-8 text-[#1a1a1a] shadow-[6px_6px_0_#1a1a1a] md:p-12"
                >
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Nome
                        </label>

                        <input 
                            id="name"
                            name="name"
                            type="text" 
                            required
                            placeholder="NOME"
                            className="w-full border-0 border-b-[3px] border-[#1a1a1a] bg-transparent px-0 py-2 font-head text-lg outline-none focus:border-[#0055ff]"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="sr-only">
                            Mensagem
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={2}
                            placeholder="MENSAGEM"
                            className="w-full border-0 border-b-[3px] border-[#1a1a1a] bg-transparent px-0 py-2 font-head text-lg outline-none focus:border-[#0055ff]"
                        />
                    </div>

                    <button 
                        type="submit"
                        className="neo-button w-full bg-[#ffcc00] px-6 py-4 font-head text-lg font-bold uppercase flex items-center justify-center gap-2"
                    >
                        <span>Abrir e-mail</span>
                        <FaArrowRight aria-hidden="true" className="size-4" />
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contato