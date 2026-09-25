import PageTransition from '../components/PageTransition.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <PageTransition>
      <section className="container-page pb-16 pt-14 md:pt-20">
        <SectionHeading
          eyebrow="Projetos"
          title="Do dado bruto ao que roda sozinho."
          description="Uma seleção de projetos de dados, automação e desenvolvimento. Clique em qualquer um para ver o processo, os trechos de código, as telas e os resultados."
        />
      </section>

      <section className="container-page border-t border-ink-100 pt-14">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
