import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import Marquee from '../components/Marquee.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { profile, stack, stats, projects } from '../data/content.js'
import Certifications from '../components/Certifications.jsx'

export default function Home() {
  return (
    <PageTransition>
      <section className="container-page pb-20 pt-16 md:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          {profile.role} · {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
        >
          Oi, eu sou o <span className="text-orange-500">Lucas</span>.
          <br />
          {profile.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-500"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/projetos"
            className="rounded-full bg-orange-500 px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-orange-600"
          >
            Ver projetos
          </Link>
          <Link
            to="/experiencia"
            className="rounded-full border border-ink-100 px-7 py-3.5 text-sm font-medium text-ink-900 transition-colors duration-200 hover:border-orange-500 hover:text-orange-600"
          >
            Minha experiência
          </Link>
        </motion.div>
      </section>

      <section className="border-y border-ink-100 bg-ink-50/50 py-8">
        <Marquee items={stack} />
      </section>

      <section className="container-page grid gap-10 py-20 md:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border-t-2 border-orange-500 pt-6"
          >
            <p className="text-5xl font-semibold tracking-tight">{s.value}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">{s.label}</p>
          </motion.div>
        ))}
      </section>

      <section className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-ink-100 pt-16">
          <div>
            <p className="eyebrow">Selecionados</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Coisas que eu construí
            </h2>
          </div>
          <Link to="/projetos" className="text-sm text-orange-600 hover:text-orange-700">
            ver todos →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
      <Certifications />
    </PageTransition>
  )
}
