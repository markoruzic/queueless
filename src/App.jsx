import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LocationDetails from './pages/LocationDetails'
import Explore from './pages/Explore'
import Community from './pages/Community'
import Profile from './pages/Profile'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/location/:id" element={<LocationDetails />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App