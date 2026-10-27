import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import Marquee from '../components/Marquee.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Certifications from '../components/Certifications.jsx'
import AskMe from '../components/AskMe.jsx'
import { profile, stack, stats, projects } from '../data/content.js'
import StackMarquee from '../components/StackMarquee.jsx' 

export default function Home() {
  return (
    <PageTransition>
      {/* HERO + CHAT */}
      <section className="container-page pb-20 pt-14 md:pt-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr] xl:gap-20">
          {/* coluna da esquerda — apresentação */}
          <div>
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
              className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl"
            >
              Oi, eu sou o <span className="text-orange-500">Lucas</span>.
              <br />
              {profile.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-500 xl:text-xl"
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

            {/* números */}
            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.32 + i * 0.08 }}
                  className="border-t-2 border-orange-500 pt-5"
                >
                  <p className="text-4xl font-semibold tracking-tight">{s.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* coluna da direita — chatbot + projetos recentes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
          >
            <AskMe />

            <div className="rounded-2xl border border-ink-100 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Projetos recentes</p>
                <Link to="/projetos" className="text-xs text-orange-600 hover:text-orange-700">
                  ver todos →
                </Link>
              </div>
              <div className="mt-4 space-y-3">
                {projects.slice(0, 2).map((p) => (
                  <Link
                    key={p.slug}
                    to={`/projetos/${p.slug}`}
                    className="group flex items-center gap-4 rounded-xl p-2 transition-colors duration-200 hover:bg-orange-50"
                  >
                    <div className="h-14 w-24 shrink-0 overflow-hidden rounded-lg border border-ink-100 bg-ink-50">
                      <img
                        src={p.cover}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium transition-colors group-hover:text-orange-600">
                        {p.title}
                      </p>
                      <p className="mt-0.5 text-xs text-ink-500">
                        {p.category} · {p.year}
                      </p>
                    </div>
                    {p.badge && (
                      <span className="shrink-0 rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-semibold text-orange-700 group-hover:bg-white">
                        {p.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STACK */}
      <section className="mb-20 border-y border-ink-100 bg-ink-50/50 py-12">
        <StackMarquee />
      </section>

      {/* PROJETOS */}
      <section className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
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

      {/* CERTIFICAÇÕES */}
      <Certifications />
    </PageTransition>
  )
}
