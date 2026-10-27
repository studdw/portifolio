import { motion } from 'framer-motion'

function Status({ ativo, label }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
        ativo ? 'bg-green-50 text-green-700' : 'bg-ink-50 text-ink-500'
      }`}
    >
      <span className="relative flex h-2 w-2">
        {ativo && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${ativo ? 'bg-green-500' : 'bg-ink-300'}`} />
      </span>
      {label}
    </span>
  )
}

/** Evolução do projeto entre versões, com comparativo "antes x depois". */
export default function VersionTimeline({ versions, changes }) {
  if (!versions || versions.length === 0) return null
  const atual = versions.length - 1

  return (
    <div>
      <div className="relative">
        {/* trilho da linha do tempo */}
        <div className="absolute left-0 right-0 top-[19px] hidden h-[2px] bg-ink-100 md:block">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="h-full origin-left bg-gradient-to-r from-ink-300 to-orange-500"
          />
        </div>

        <ol className={`grid gap-10 md:gap-8 ${versions.length > 1 ? 'md:grid-cols-2' : ''}`}>
          {versions.map((v, i) => {
            const ativo = i === atual
            return (
              <motion.li
                key={v.version}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.25 }}
                className="relative"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`relative z-10 grid h-10 w-10 place-items-center rounded-full border-4 border-white font-mono text-xs font-semibold ${
                      ativo ? 'bg-orange-500 text-white shadow-[0_0_0_6px_rgba(255,107,0,0.15)]' : 'bg-ink-100 text-ink-500'
                    }`}
                  >
                    {v.version}
                  </span>
                  <span className="relative z-10 bg-white px-3 text-sm text-ink-500">{v.date}</span>
                  <span className="relative z-10 ml-auto bg-white pl-3">
                    <Status ativo={ativo} label={v.status} />
                  </span>
                </div>

                <div
                  className={`mt-6 overflow-hidden rounded-2xl border transition-shadow duration-300 ${
                    ativo
                      ? 'border-orange-200 bg-white shadow-[0_24px_60px_-30px_rgba(255,107,0,0.45)]'
                      : 'border-ink-100 bg-ink-50/60'
                  }`}
                >
                  {v.image && (
                    <div className="aspect-[16/8] overflow-hidden border-b border-ink-100 bg-white">
                      <img
                        src={v.image}
                        alt={`${v.version} — ${v.title}`}
                        loading="lazy"
                        className={`h-full w-full object-cover object-left-top ${ativo ? '' : 'grayscale-[60%] opacity-80'}`}
                      />
                    </div>
                  )}
                  <div className="p-6 md:p-7">
                    <h3 className="text-lg font-semibold tracking-tight">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">{v.text}</p>
                    <ul className="mt-5 space-y-2">
                      {v.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-sm text-ink-700">
                          <span className={`mt-[3px] text-xs ${ativo ? 'text-orange-500' : 'text-ink-300'}`}>
                            {ativo ? '✓' : '–'}
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>

      {changes && changes.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 overflow-hidden rounded-2xl border border-ink-100"
        >
          <div className="grid grid-cols-[1fr_1fr] bg-ink-50 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500 md:grid-cols-[180px_1fr_40px_1fr]">
            <span className="hidden px-6 py-4 md:block">O que mudou</span>
            <span className="px-6 py-4">Antes · {versions[0].version}</span>
            <span className="hidden md:block" />
            <span className="px-6 py-4 text-orange-600">Agora · {versions[atual].version}</span>
          </div>
          {changes.map((c) => (
            <div
              key={c.label}
              className="grid grid-cols-[1fr_1fr] border-t border-ink-100 text-sm md:grid-cols-[180px_1fr_40px_1fr] md:items-center"
            >
              <span className="col-span-2 px-6 pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-ink-300 md:col-span-1 md:py-4 md:text-ink-700 md:normal-case md:tracking-normal md:text-sm">
                {c.label}
              </span>
              <span className="px-6 py-3 text-ink-500 line-through decoration-ink-300/70 md:py-4">{c.before}</span>
              <span className="hidden text-orange-500 md:block">→</span>
              <span className="px-6 py-3 font-medium text-ink-900 md:py-4">{c.after}</span>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
