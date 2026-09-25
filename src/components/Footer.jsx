import { Link } from 'react-router-dom'
import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-100 bg-ink-50/60">
      <div className="container-page flex flex-col gap-8 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Vamos conversar</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 block text-2xl font-semibold tracking-tight hover:text-orange-600 md:text-3xl"
          >
            {profile.email}
          </a>
          <p className="mt-2 text-sm text-ink-500">{profile.location}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-ink-500 md:items-end">
          <div className="flex gap-6">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline">
              GitHub
            </a>
            <Link to="/projetos" className="link-underline">
              Projetos
            </Link>
          </div>
          <p>© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </div>
    </footer>
  )
}
