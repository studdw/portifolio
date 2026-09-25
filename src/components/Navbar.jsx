import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'início' },
  { to: '/sobre', label: 'sobre' },
  { to: '/projetos', label: 'projetos' },
  { to: '/experiencia', label: 'experiência' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-ink-100 bg-white/85 backdrop-blur-md' : 'bg-white/0'
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-base font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-orange-500 text-sm font-bold text-white">
            L
          </span>
          <span>Lucas Pasturuti</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-sm transition-colors duration-200 ${
                    isActive ? 'text-orange-600' : 'text-ink-500 hover:text-ink-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-orange-500 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-ink-100 md:hidden"
        >
          <span className="flex flex-col gap-[5px]">
            <span
              className={`block h-[2px] w-5 bg-ink-900 transition-transform duration-300 ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span className={`block h-[2px] w-5 bg-ink-900 transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`block h-[2px] w-5 bg-ink-900 transition-transform duration-300 ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-ink-100 bg-white md:hidden ${
          open ? 'max-h-72' : 'max-h-0 border-transparent'
        } transition-[max-height] duration-300`}
      >
        <ul className="container-page flex flex-col py-4">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `block py-3 text-lg ${isActive ? 'text-orange-600' : 'text-ink-700'}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
