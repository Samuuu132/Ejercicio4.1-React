import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import WatchList from './pages/WatchList'
import WatchDetail from './pages/WatchDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<WatchList />} />
        <Route path="/items/:id" element={<WatchDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App