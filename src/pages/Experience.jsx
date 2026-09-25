import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { experience, skillGroups } from '../data/content.js'

export default function Experience() {
  return (
    <PageTransition>
      <section className="container-page pb-16 pt-14 md:pt-20">
        <SectionHeading
          eyebrow="Experiência"
          title="Onde eu coloquei a mão."
          description="Trajetória profissional, responsabilidades e as competências que sustentam cada entrega."
        />
      </section>

      <section className="container-page border-t border-ink-100 pt-14">
        <div className="relative">
          <span className="absolute left-0 top-2 hidden h-[calc(100%-1rem)] w-px bg-ink-100 md:block" />

          {experience.map((job, i) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative md:pl-12"
            >
              <span className="absolute left-[-5px] top-2 hidden h-[11px] w-[11px] rounded-full border-2 border-white bg-orange-500 md:block" />

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{job.company}</h2>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
                  {job.period}
                </span>
              </div>

              <p className="mt-3 text-lg text-ink-900">{job.role}</p>
              <p className="mt-1 text-sm text-ink-500">{job.area}</p>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-ink-700">{job.description}</p>

              <ul className="mt-7 grid gap-3 md:grid-cols-2">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 rounded-xl border border-ink-100 p-4 text-sm leading-relaxed text-ink-700"
                  >
                    <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-orange-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="container-page mt-20 border-t border-ink-100 pt-14">
        <p className="eyebrow">Competências</p>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <h3 className="border-b-2 border-orange-500 pb-3 text-sm font-semibold uppercase tracking-wide">
                {g.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-ink-500">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
