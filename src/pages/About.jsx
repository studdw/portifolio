import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { about, profile } from '../data/content.js'

export default function About() {
  return (
    <PageTransition>
      <section className="container-page pb-16 pt-14 md:pt-20">
        <SectionHeading eyebrow="Sobre" title={about.lead} />
      </section>

      <section className="container-page grid gap-14 border-t border-ink-100 pt-14 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="text-[17px] leading-[1.8] text-ink-700"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <aside className="space-y-8">
          <div className="rounded-2xl border border-ink-100 p-7">
            <p className="eyebrow">Formação</p>
            <ul className="mt-6 space-y-6">
              {about.education.map((e) => (
                <li key={e.title} className="border-l-2 border-orange-500 pl-4">
                  <p className="font-medium leading-snug">{e.title}</p>
                  <p className="mt-1 text-sm text-ink-500">{e.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{e.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-orange-500 p-7 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-100">Onde estou</p>
            <p className="mt-4 text-lg font-medium leading-snug">Libbs Farmacêutica</p>
            <p className="mt-1 text-sm text-orange-50">
              Diretoria de Inovação e Desenvolvimento do Negócio
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-medium text-orange-600"
            >
              Falar comigo
            </a>
          </div>
        </aside>
      </section>

      <section className="container-page mt-20 border-t border-ink-100 pt-14">
        <p className="eyebrow">Como eu trabalho</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {about.values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-ink-100 p-7 transition-colors duration-300 hover:border-orange-200"
            >
              <span className="text-sm font-semibold text-orange-500">0{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
