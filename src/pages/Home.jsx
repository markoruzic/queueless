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
    <main className="home-page">
      <section className="hero-section">
        <h1>QueueLess</h1>
        <p className="hero-text">
          Pametna procjena čekanja temeljena na prijavama korisnika i analizi uzoraka.
        </p>
      </section>

      <section className="controls-section">
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
      </section>

      <section className="map-section">
        <div className="map-card">
          <div className="map-placeholder">
            <span className="map-label">Interaktivna karta</span>

            <div className="map-pins">
              <div className="map-pin">📍</div>
              <div className="map-pin">📍</div>
              <div className="map-pin">📍</div>
            </div>

            <p className="map-description">
              Ovdje će biti prikaz lokacija i procijenjenog čekanja na karti.
            </p>
          </div>
        </div>
      </section>

      <section className="locations-section">
        <div className="section-header">
          <h2>Lokacije</h2>
          <span>{filteredLocations.length} rezultata</span>
        </div>

        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))
        ) : (
          <p className="empty-state">Nema rezultata za zadanu pretragu.</p>
        )}
      </section>
    </main>
  )
}

export default Home