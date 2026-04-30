import { useState } from 'react'
import LocationCard from '../components/LocationCard'
import BottomNavigation from '../components/BottomNavigation'
import { locations } from '../data/locations'

const categories = [
  'Sve',
  'Pošta',
  'Banka',
  'Ljekarna',
  'Bolnica',
  'Kafić',
  'Restoran',
  'Trgovina',
  'Teretana'
]

function Explore() {
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
    <main className="explore-page">
      <section className="explore-header">
        <h1>Explore</h1>
        <p>Pregledaj lokacije i pronađi najkraće čekanje.</p>
      </section>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Pretraži lokaciju..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        {search && (
          <button
            type="button"
            className="search-clear-button"
            onClick={() => setSearch('')}
          >
            ×
          </button>
        )}
      </div>

      <div className="category-chips explore-chips">
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

      <section className="explore-list">
        <div className="section-header">
          <h2>Lokacije u blizini</h2>
          <span>{filteredLocations.length} rezultata</span>
        </div>

        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))
        ) : (
          <div className="empty-results-card">
            <h3>Nema pronađenih lokacija</h3>
            <p>Pokušaj promijeniti pretragu ili odabrati drugu kategoriju.</p>
          </div>
        )}
      </section>

      <BottomNavigation />
    </main>
  )
}

export default Explore