import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Home />} />
      </Route>
    </Routes>
  )
}