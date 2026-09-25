export default function Marquee({ items }) {
  const loop = [...items, ...items]
  return (
    <div className="marquee-mask overflow-hidden py-2">
      <div className="animate-marquee flex w-max gap-3">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="chip whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
