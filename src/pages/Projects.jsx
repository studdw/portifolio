import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/content.js'

const TODOS = 'Todos'
const categorias = [TODOS, ...new Set(projects.map((p) => p.category).filter(Boolean))]

export default function Projects() {
  const [filtro, setFiltro] = useState(TODOS)
  const visiveis = filtro === TODOS ? projects : projects.filter((p) => p.category === filtro)

  return (
    <PageTransition>
      <section className="container-page pb-12 pt-14 md:pt-20">
        <SectionHeading
          eyebrow="Projetos"
          title="Do dado bruto ao que roda sozinho."
          description="Uma seleção de projetos de dados, IA, automação e desenvolvimento. Clique em qualquer um para ver o processo, os trechos de código, as telas e os resultados."
        />
      </section>

      <section className="container-page border-t border-ink-100 pt-10">
        <LayoutGroup>
          <div className="flex flex-wrap items-center gap-2">
            {categorias.map((c) => {
              const ativo = filtro === c
              const qtd = c === TODOS ? projects.length : projects.filter((p) => p.category === c).length
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFiltro(c)}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                    ativo ? 'text-white' : 'text-ink-700 hover:text-orange-600'
                  }`}
                >
                  {ativo && (
                    <motion.span
                      layoutId="filtro-ativo"
                      className="absolute inset-0 rounded-full bg-ink-900"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative">
                    {c}
                    <span className={`ml-1.5 text-xs ${ativo ? 'text-white/60' : 'text-ink-300'}`}>{qtd}</span>
                  </span>
                </button>
              )
            })}
          </div>

          <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {visiveis.map((p, i) => (
                <ProjectCard
                  key={p.slug}
                  project={p}
                  index={projects.indexOf(p)}
                  featured={filtro === TODOS && i === 0}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </section>
    </PageTransition>
  )
}
