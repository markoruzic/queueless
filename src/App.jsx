import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LocationDetails from './pages/LocationDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:id" element={<LocationDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App