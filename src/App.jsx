import { NavLink, Link, Route, Router, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Reviews from './pages/Reviews'
import NotFound from './pages/NotFound'
import Single from './pages/Single'


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="gallery" element={ <Gallery /> } />
        <Route path="about" element={ <About /> } />
        <Route path="reviews" element={ <Reviews /> } />
        <Route path="gallery/:id" element={ <Single /> } />
        <Route path="*" element={ <NotFound /> } />
      </Route>
    </Routes>
  )
}

export default App