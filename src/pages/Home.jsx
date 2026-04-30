import { useState } from 'react'
import QueueMap from '../components/QueueMap'
import LocationCard from '../components/LocationCard'
import { locations } from '../data/locations'
import BottomNavigation from '../components/BottomNavigation'
import logo from '../assets/Logo.png'

const categories = ['Sve', 'Pošta', 'Banka', 'Ljekarna']

function Home() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Sve')

  const filteredLocations = locations.filter((location) => {
    const matchesSearch = location.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === 'Sve' || location.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <main className="map-page">
      <QueueMap locations={filteredLocations} />

      <section className="map-top-panel">
        <div className="brand-row">
  <img src={logo} alt="QueueLess logo" className="brand-logo" />
  <h1>QueueLess</h1>
</div>

        <input
          type="text"
          placeholder="Pretraži lokaciju..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="category-chips">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={category === item ? 'chip chip-active' : 'chip'}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

     
      <BottomNavigation />
    </main>
  )
}

export default Home