import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Collection } from './pages/Collection'

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/collection" element={<Collection />} />
      </Route>
    </Routes>
  )
}