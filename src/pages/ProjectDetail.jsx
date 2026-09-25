import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import CodeBlock from '../components/CodeBlock.jsx'
import Gallery from '../components/Gallery.jsx'
import ResultStats from '../components/ResultStats.jsx'
import Timeline from '../components/Timeline.jsx'
import { getProject, projects } from '../data/content.js'

function Bloco({ eyebrow, title, children, className = '' }) {
  return (
    <section className={`container-page mt-20 border-t border-ink-100 pt-14 ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      {title && <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>}
      <div className="mt-10">{children}</div>
    </section>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <Navigate to="/projetos" replace />

  const indice = projects.findIndex((p) => p.slug === slug)
  const proximo = projects[(indice + 1) % projects.length]

  return (
    <PageTransition>
      {/* CABEÇALHO */}
      <section className="container-page pb-14 pt-10 md:pt-14">
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-orange-600"
        >
          <span>←</span> voltar para projetos
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl"
        >
          {project.title}
        </motion.h1>

        <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-500">
          <span>
            <span className="text-ink-300">Período · </span>
            {project.year}
          </span>
          <span>
            <span className="text-ink-300">Atuação · </span>
            {project.role}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-ink-700">{project.summary}</p>
      </section>

      {/* CONTEXTO */}
      <section className="container-page grid gap-10 border-t border-ink-100 pt-14 md:grid-cols-2">
        <div className="rounded-2xl border border-ink-100 p-8">
          <p className="eyebrow">O problema</p>
          <p className="mt-5 text-[15px] leading-[1.8] text-ink-700">{project.problem}</p>
        </div>
        <div className="rounded-2xl bg-orange-500 p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-100">A solução</p>
          <p className="mt-5 text-[15px] leading-[1.8] text-orange-50">{project.solution}</p>
        </div>
      </section>

      {/* COMO FOI CONSTRUÍDO */}
      <Bloco eyebrow="Processo" title="Como foi construído">
        <Timeline steps={project.process} />
      </Bloco>

      {/* CÓDIGO */}
      <Bloco eyebrow="Código" title="Trechos da implementação">
        <CodeBlock blocks={project.code} />
      </Bloco>

      {/* GALERIA */}
      <Bloco eyebrow="Em funcionamento" title="O projeto rodando">
        <Gallery items={project.gallery} />
      </Bloco>

      {/* RESULTADOS */}
      <Bloco eyebrow="Resultados" title="O que mudou na prática">
        <ResultStats results={project.results} />
      </Bloco>

      {/* STACK */}
      <Bloco eyebrow="Stack" title="Ferramentas e para quê">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.stackDetail.map((s) => (
            <div key={s.name} className="rounded-xl border border-ink-100 p-6">
              <p className="font-mono text-sm font-medium text-orange-600">{s.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.use}</p>
            </div>
          ))}
        </div>
      </Bloco>

      {/* PRÓXIMO PROJETO */}
      <section className="container-page mt-20 border-t border-ink-100 pt-14">
        <Link to={`/projetos/${proximo.slug}`} className="group block">
          <p className="eyebrow">Próximo projeto</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-orange-600 md:text-5xl">
              {proximo.title}
            </h2>
            <span className="text-2xl text-orange-500 transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </div>
        </Link>
      </section>
    </PageTransition>
  )
}
