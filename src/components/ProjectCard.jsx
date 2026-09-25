import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className="h-full"
    >
      <Link
        to={`/projetos/${project.slug}`}
        className="group relative flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_18px_50px_-20px_rgba(255,107,0,0.35)]"
      >
        <span className="absolute left-8 top-0 h-[3px] w-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-14" />

        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-orange-600">
            {project.title}
          </h3>
          <span className="shrink-0 pt-1 text-xs text-ink-300">{project.year}</span>
        </div>

        <p className="mt-4 text-[15px] leading-relaxed text-ink-500">{project.summary}</p>

        <ul className="mt-6 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm text-ink-700">
              <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-orange-500" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange-600">
            Ver detalhes
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
