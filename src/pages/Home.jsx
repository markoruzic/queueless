import { useState } from 'react'
import LocationCard from '../components/LocationCard'
import { locations } from '../data/locations'

function Home() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filteredLocations = locations.filter((location) => {
    const matchesSearch = location.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' || location.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <main>
      <h1>QueueLess</h1>

      <input
        type="text"
        placeholder="Pretraži lokaciju..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">Sve</option>
        <option value="Pošta">Pošta</option>
        <option value="Banka">Banka</option>
        <option value="Ljekarna">Ljekarna</option>
      </select>

      {filteredLocations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </main>
  )
}

export default Home