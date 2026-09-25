import { motion } from 'framer-motion'

/** Etapas de construção do projeto, em formato de linha do tempo numerada. */
export default function Timeline({ steps }) {
  if (!steps || steps.length === 0) return null

  return (
    <ol className="relative space-y-8 border-l border-ink-100 pl-8">
      {steps.map((step, i) => (
        <motion.li
          key={step.title}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.06 }}
          className="relative"
        >
          <span className="absolute -left-[41px] grid h-[26px] w-[26px] place-items-center rounded-full border-2 border-white bg-orange-500 text-[11px] font-semibold text-white">
            {i + 1}
          </span>
          <h4 className="font-semibold tracking-tight">{step.title}</h4>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-500">{step.text}</p>
        </motion.li>
      ))}
    </ol>
  )
}
