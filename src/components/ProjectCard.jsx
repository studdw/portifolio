import { forwardRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/** Capa do projeto em uma "janela" de navegador. Sem imagem, mostra um fundo gerado. */
export function ProjectCover({ project, className = '' }) {
  const [erro, setErro] = useState(false)
  const src = project.cover || project.gallery?.[0]?.src
  const semImagem = !src || erro

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-ink-100 bg-ink-50 shadow-[0_10px_30px_-18px_rgba(18,18,18,0.35)] ${className}`}
    >
      <div className="flex h-7 items-center gap-1.5 border-b border-ink-100 bg-white px-3">
        <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
        <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
        <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        <span className="ml-3 h-3.5 flex-1 rounded-full bg-ink-50" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        {semImagem ? (
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-200">
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-2xl font-semibold leading-tight tracking-tight text-white drop-shadow-sm">
                {project.title}
              </p>
            </div>
          </div>
        ) : (
          <img
            src={src}
            alt={`Tela do projeto ${project.title}`}
            loading="lazy"
            onError={() => setErro(true)}
            className="h-full w-full object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </div>
  )
}

const ProjectCard = forwardRef(function ProjectCard({ project, index, featured = false }, ref) {
  const numero = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className={`h-full ${featured ? 'md:col-span-2' : ''}`}
    >
      <Link
        to={`/projetos/${project.slug}`}
        className={`group relative flex h-full flex-col gap-7 overflow-hidden rounded-3xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_24px_60px_-24px_rgba(255,107,0,0.4)] md:p-6 ${
          featured ? 'lg:flex-row lg:items-center lg:gap-10' : ''
        }`}
      >
        <div className={`relative ${featured ? 'lg:w-[58%] lg:shrink-0' : ''}`}>
          <ProjectCover project={project} />
          {project.badge && (
            <span className="absolute right-4 top-11 inline-flex items-center gap-1.5 rounded-full bg-ink-900/85 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-500" />
              </span>
              {project.badge}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col px-1 pb-1">
          <div className="flex items-center gap-3 text-xs">
            <span className="font-mono text-orange-500">{numero}</span>
            <span className="h-px w-6 bg-ink-100" />
            {project.category && <span className="font-medium uppercase tracking-[0.16em] text-ink-500">{project.category}</span>}
            <span className="ml-auto text-ink-300">{project.year}</span>
          </div>

          <h3
            className={`mt-4 font-semibold tracking-tight transition-colors duration-200 group-hover:text-orange-600 ${
              featured ? 'text-2xl md:text-3xl' : 'text-xl'
            }`}
          >
            {project.title}
          </h3>

          <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{project.summary}</p>

          {featured && (
            <ul className="mt-5 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-ink-700">
                  <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-orange-500" />
                  {h}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, featured ? 6 : 4).map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink-100 text-ink-700 transition-all duration-300 group-hover:-rotate-45 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
})

export default ProjectCard
