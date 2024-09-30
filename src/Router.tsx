import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Collection } from './pages/Collection'
import { SmartHarpia } from './pages/ProjectPages/SmartHarpia'
import { Sisdle } from './pages/ProjectPages/Sisdle'
import { Certificates } from './pages/Certificates'
import { RemakeJogo } from './pages/ProjectPages/RemakeJogo'
import { ProjetoJupiter } from './pages/ProjectPages/ProjetoJupiter'
import { Portfolio } from './pages/ProjectPages/Portfólio'
import { HaruTickets } from './pages/ProjectPages/HaruTickets'
import { CatManager } from './pages/ProjectPages/CatManager'

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />


        <Route path="projects" element={<Projects />}/>
        <Route path="projects">
          <Route path="smart-harpia" element={<SmartHarpia />} />
          <Route path="sisdle" element={<Sisdle />} />
          <Route path="remake-jogo" element={<RemakeJogo />} />
          <Route path="projeto-jupiter" element={<ProjetoJupiter />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="haru-tickets" element={<HaruTickets />} />
          <Route path="cat-manager" element={<CatManager />} />
        </Route>

        <Route path="collection" element={<Collection />} />
        <Route path="certificates" element={<Certificates />} />
      </Route>
    </Routes>
  )
}