import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LocationDetails from './pages/LocationDetails'
import Explore from './pages/Explore'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:id" element={<LocationDetails />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App