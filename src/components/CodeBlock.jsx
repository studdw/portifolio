import { useState } from 'react'

/**
 * Bloco de código com abas, rótulo de linguagem, numeração de linhas
 * e botão de copiar. Recebe a lista `blocks` vinda de content.js.
 */
export default function CodeBlock({ blocks }) {
  const [ativo, setAtivo] = useState(0)
  const [copiado, setCopiado] = useState(false)

  if (!blocks || blocks.length === 0) return null

  const atual = blocks[ativo]
  const linhas = atual.snippet.split('\n')

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(atual.snippet)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      setCopiado(false)
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-100">
      {/* abas */}
      <div className="flex flex-wrap gap-1 border-b border-ink-100 bg-ink-50/70 p-2">
        {blocks.map((b, i) => (
          <button
            key={b.label}
            type="button"
            onClick={() => {
              setAtivo(i)
              setCopiado(false)
            }}
            className={`rounded-lg px-4 py-2 text-sm transition-colors duration-200 ${
              i === ativo
                ? 'bg-orange-500 text-white'
                : 'text-ink-500 hover:bg-white hover:text-ink-900'
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>

      {atual.description && (
        <p className="border-b border-ink-100 bg-white px-6 py-4 text-sm leading-relaxed text-ink-500">
          {atual.description}
        </p>
      )}

      {/* código */}
      <div className="relative bg-ink-900">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <span className="font-mono text-xs uppercase tracking-wider text-orange-400">
            {atual.language}
          </span>
          <button
            type="button"
            onClick={copiar}
            className="rounded-md border border-white/15 px-3 py-1.5 font-mono text-xs text-white/70 transition-colors duration-200 hover:border-orange-500 hover:text-orange-400"
          >
            {copiado ? 'copiado ✓' : 'copiar'}
          </button>
        </div>

        <div className="code-scroll overflow-x-auto">
          <pre className="px-5 py-5 font-mono text-[13px] leading-[1.7] text-white/90">
            <code>
              {linhas.map((linha, i) => (
                <div key={i} className="flex">
                  <span className="mr-5 w-7 shrink-0 select-none text-right text-white/25">
                    {i + 1}
                  </span>
                  <span className="whitespace-pre">{linha || ' '}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
