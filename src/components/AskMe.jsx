import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { askMe } from '../data/content.js'

export default function AskMe() {
  const [ativa, setAtiva] = useState(null)
  const [digitando, setDigitando] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const perguntar = (i) => {
    if (i === ativa) {
      setAtiva(null)
      return
    }
    clearTimeout(timer.current)
    setAtiva(i)
    setDigitando(true)
    timer.current = setTimeout(() => setDigitando(false), 700)
  }

  const resposta = ativa !== null ? askMe.perguntas[ativa].resposta : null

  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-6">
      {/* cabeçalho */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={askMe.avatar}
            alt="Avatar de Lucas"
            className="h-11 w-11 rounded-full border border-ink-100 object-cover object-top"
          />
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-orange-500" />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-tight">{askMe.titulo}</p>
          <p className="text-xs text-ink-500">{askMe.subtitulo}</p>
        </div>
      </div>

      {/* área da resposta */}
      <div className="mt-6 min-h-[150px] rounded-xl bg-ink-50/70 p-5">
        <AnimatePresence mode="wait">
          {ativa === null ? (
            <motion.div
              key="vazio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-full flex-col items-center justify-center gap-3 py-4 text-center"
            >
              <img
                src={askMe.avatar}
                alt=""
                aria-hidden="true"
                className="h-20 w-20 rounded-full object-cover object-top opacity-90"
              />
              <p className="text-sm text-ink-500">{askMe.placeholder}</p>
            </motion.div>
          ) : (
            <motion.div
              key={ativa}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="flex gap-3"
            >
              <img
                src={askMe.avatar}
                alt=""
                aria-hidden="true"
                className="h-9 w-9 shrink-0 rounded-full object-cover object-top"
              />

              {digitando ? (
                <span className="flex items-center gap-1.5 pt-3">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      animate={{ opacity: [0.25, 1, 0.25] }}
                      transition={{ duration: 1, repeat: Infinity, delay: d * 0.18 }}
                      className="h-1.5 w-1.5 rounded-full bg-orange-500"
                    />
                  ))}
                </span>
              ) : (
                <p className="rounded-xl rounded-tl-sm bg-white p-4 text-sm leading-relaxed text-ink-700 shadow-sm">
                  {resposta}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* perguntas */}
      <div className="mt-5 flex flex-col gap-2">
        {askMe.perguntas.map((p, i) => (
          <button
            key={p.pergunta}
            type="button"
            onClick={() => perguntar(i)}
            aria-pressed={i === ativa}
            className={`rounded-full border px-4 py-2.5 text-left text-sm transition-all duration-200 ${
              i === ativa
                ? 'border-orange-500 bg-orange-500 text-white'
                : 'border-ink-100 text-ink-700 hover:border-orange-500 hover:text-orange-600'
            }`}
          >
            {p.pergunta}
          </button>
        ))}
      </div>
    </div>
  )
}
