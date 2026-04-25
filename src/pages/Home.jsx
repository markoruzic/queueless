import { useState } from 'react'
import QueueMap from '../components/QueueMap'
import LocationCard from '../components/LocationCard'
import { locations } from '../data/locations'

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
          <div className="brand-icon">Q</div>
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

      <section className="map-bottom-panel">
        <div className="section-header">
          <div>
            <h2>{filteredLocations.length} lokacije u blizini</h2>
            <span>Real-time procjene čekanja</span>
          </div>
        </div>

        <div className="map-location-list">
          {filteredLocations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home