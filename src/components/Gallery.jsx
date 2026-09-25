import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Placeholder({ caption, src }) {
  return (
    <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-3 bg-ink-50 p-8 text-center">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-100 text-orange-600">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </span>
      <p className="text-sm text-ink-500">{caption}</p>
      <code className="font-mono text-[11px] text-ink-300">{src}</code>
    </div>
  )
}

function Shot({ item, onOpen }) {
  const [erro, setErro] = useState(false)

  return (
    <button
      type="button"
      onClick={() => !erro && onOpen()}
      className={`group block overflow-hidden rounded-2xl border border-ink-100 text-left transition-all duration-300 ${
        erro ? 'cursor-default' : 'hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_18px_50px_-24px_rgba(255,107,0,0.4)]'
      }`}
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-ink-50">
        {erro ? (
          <Placeholder caption={item.caption} src={item.src} />
        ) : (
          <img
            src={item.src}
            alt={item.caption}
            loading="lazy"
            onError={() => setErro(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        )}
      </div>
      {!erro && (
        <p className="border-t border-ink-100 px-5 py-4 text-sm leading-relaxed text-ink-500">
          {item.caption}
        </p>
      )}
    </button>
  )
}

export default function Gallery({ items }) {
  const [aberto, setAberto] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setAberto(null)
      if (aberto === null) return
      if (e.key === 'ArrowRight') setAberto((i) => (i + 1) % items.length)
      if (e.key === 'ArrowLeft') setAberto((i) => (i - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [aberto, items.length])

  if (!items || items.length === 0) return null

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Shot key={item.src} item={item} onOpen={() => setAberto(i)} />
        ))}
      </div>

      <AnimatePresence>
        {aberto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAberto(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/90 p-6 backdrop-blur-sm"
          >
            <button
              type="button"
              aria-label="Fechar"
              className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-orange-500 hover:text-orange-400"
            >
              ✕
            </button>

            <motion.figure
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl"
            >
              <img
                src={items[aberto].src}
                alt={items[aberto].caption}
                className="max-h-[75vh] w-full rounded-xl object-contain"
              />
              <figcaption className="mt-5 text-center text-sm text-white/70">
                {items[aberto].caption}
                <span className="ml-3 text-white/35">
                  {aberto + 1} / {items.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
