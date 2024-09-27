import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Collection } from './pages/Collection'
import { SmartHarpia } from './pages/ProjectPages/SmartHarpia'
import { Sisdle } from './pages/ProjectPages/Sisdle'

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />


        <Route path="projects" element={<Projects />}/>
        <Route path="projects">
          <Route path="smart-harpia" element={<SmartHarpia />} />
          <Route path="sisdle" element={<Sisdle />} />
        </Route>

        <Route path="collection" element={<Collection />} />
      </Route>
    </Routes>
  )
}