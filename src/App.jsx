import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import LocationDetails from './pages/LocationDetails'
import Community from './pages/Community'
import Profile from './pages/Profile'
import ScrollToTop from './components/ScrollToTop'
import { UserProgressProvider } from './context/UserProgressContext'

function App() {
  return (
    <UserProgressProvider>
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
    </UserProgressProvider>
  )
}

export default App