import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { Presentation } from './components/Presentation'
import { Experience } from './components/Experience'
import { Works } from './components/Works'
import { AcademicLife } from './components/AcademicLife'
import { SiteFooter } from './components/SiteFooter'
import { TableOfContents } from './components/TableOfContents'
import { PhotoViewerProvider } from './components/PhotoViewer'
import { useScrollSpy } from './hooks/useScrollSpy'
import { sectionIds } from './data/sections'

function App() {
  const activeId = useScrollSpy(sectionIds)

  return (
    <PhotoViewerProvider>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <SiteHeader activeId={activeId} />
      <TableOfContents activeId={activeId} />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Presentation />
        <Experience />
        <Works />
        <AcademicLife />
      </main>
      <SiteFooter />
    </PhotoViewerProvider>
  )
}

export default App
