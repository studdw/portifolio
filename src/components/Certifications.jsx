import { motion } from 'framer-motion'
import { certifications, certificationsProfileUrl } from '../data/content.js'

export default function Certifications() {
  return (
    <section className="container-page mt-20 border-t border-ink-100 pt-16">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Certificações</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Formação contínua
          </h2>
        </div>

        <a
          href={certificationsProfileUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-orange-600 transition-colors hover:text-orange-700"
        >
          ver todas no LinkedIn →
        </a>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
            className="group relative flex flex-col rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_18px_50px_-24px_rgba(255,107,0,0.4)]"
          >
            <span className="absolute left-7 top-0 h-[3px] w-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-12" />

            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-xs uppercase tracking-wider text-orange-600">
                {c.issuer}
              </span>
              <span className="shrink-0 text-xs text-ink-300">{c.date}</span>
            </div>

            <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight transition-colors duration-200 group-hover:text-orange-600">
              {c.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-ink-500">{c.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {c.skills.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between gap-3 pt-6">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-orange-600">
                Ver credencial
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
              {c.credential && (
                <span className="font-mono text-[10px] text-ink-300">
                  {c.credential.slice(0, 8)}
                </span>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
