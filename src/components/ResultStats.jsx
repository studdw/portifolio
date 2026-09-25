import { motion } from 'framer-motion'

export default function ResultStats({ results }) {
  if (!results || results.length === 0) return null

  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {results.map((r, i) => (
        <motion.div
          key={r.label}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="rounded-2xl border border-ink-100 bg-ink-50/50 p-7"
        >
          <p className="text-2xl font-semibold leading-tight tracking-tight text-orange-600 md:text-3xl">
            {r.value}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-500">{r.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
