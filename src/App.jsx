import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import WatchList from './pages/WatchList'
import WatchDetail from './pages/WatchDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<><Navbar /><WatchList /></>} />
        <Route path="/items/:id" element={<><Navbar /><WatchDetail /></>} />
        <Route path="*" element={<><Navbar /><NotFound /></>} />
      </Routes>
    </>
  )
}

export default App