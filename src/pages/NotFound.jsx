import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'

export default function NotFound() {
  return (
    <PageTransition>
      <section className="container-page grid min-h-[60vh] place-items-center text-center">
        <div>
          <p className="text-7xl font-semibold text-orange-500">404</p>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight">Página não encontrada</h1>
          <p className="mt-3 text-ink-500">O link que você abriu não existe por aqui.</p>
          <Link
            to="/"
            className="mt-8 inline-block rounded-full bg-orange-500 px-7 py-3.5 text-sm font-medium text-white hover:bg-orange-600"
          >
            Voltar ao início
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
