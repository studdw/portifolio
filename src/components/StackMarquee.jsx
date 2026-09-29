import { useState } from 'react'
import { motion } from 'framer-motion'
import { stackGroups } from '../data/content.js'

// Todas as tecnologias, achatadas a partir dos grupos
const todas = stackGroups.flatMap((g) =>
  g.items.map((nome) => ({ nome, grupo: g.id, cor: g.cor }))
)

// Divide em duas faixas que correm em sentidos opostos
const metade = Math.ceil(todas.length / 2)
const faixas = [todas.slice(0, metade), todas.slice(metade)]

function Pill({ tech, ativo, apagado }) {
  return (
    <span
      className={`group relative inline-flex shrink-0 items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm transition-all duration-300 ${
        ativo
          ? 'border-orange-500 bg-orange-500 text-white shadow-[0_8px_24px_-8px_rgba(255,107,0,0.6)]'
          : apagado
            ? 'border-ink-100 bg-white text-ink-300 opacity-40'
            : 'border-ink-100 bg-white text-ink-700'
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
          ativo ? 'bg-white' : 'bg-orange-500'
        }`}
      />
      {tech.nome}
    </span>
  )
}

export default function StackMarquee() {
  const [filtro, setFiltro] = useState(null)

  return (
    <div className="space-y-7">
      {/* filtros por categoria */}
      <div className="container-page flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setFiltro(null)}
          className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
            filtro === null
              ? 'bg-ink-900 text-white'
              : 'text-ink-500 hover:bg-white hover:text-ink-900'
          }`}
        >
          tudo
        </button>

        {stackGroups.map((g) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setFiltro(filtro === g.id ? null : g.id)}
            className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
              filtro === g.id
                ? 'bg-orange-500 text-white'
                : 'text-ink-500 hover:bg-white hover:text-ink-900'
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      {/* faixas em movimento */}
      <div className="space-y-3">
        {faixas.map((faixa, idx) => {
          const loop = [...faixa, ...faixa]
          return (
            <div key={idx} className="marquee-mask group overflow-hidden py-1">
              <div
                className={`flex w-max gap-3 group-hover:[animation-play-state:paused] ${
                  idx % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'
                }`}
              >
                {loop.map((tech, i) => (
                  <motion.div
                    key={`${tech.nome}-${i}`}
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <Pill
                      tech={tech}
                      ativo={filtro === tech.grupo}
                      apagado={filtro !== null && filtro !== tech.grupo}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* legenda do grupo selecionado */}
      <div className="container-page flex min-h-[24px] justify-center">
        {filtro && (
          <motion.p
            key={filtro}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-ink-500"
          >
            {stackGroups.find((g) => g.id === filtro)?.descricao}
          </motion.p>
        )}
      </div>
    </div>
  )
}
