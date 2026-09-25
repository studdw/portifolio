export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">{title}</h1>
      {description && <p className="mt-6 text-lg leading-relaxed text-ink-500">{description}</p>}
    </div>
  )
}
