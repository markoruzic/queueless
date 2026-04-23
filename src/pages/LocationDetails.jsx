import { Link, useParams } from 'react-router-dom'
import { locations } from '../data/locations'

function LocationDetails() {
  const { id } = useParams()
  const location = locations.find((item) => item.id === Number(id))

  if (!location) {
    return (
      <main className="details-page">
        <h1>Lokacija nije pronađena</h1>
        <Link to="/" className="back-link">
          Povratak na početnu
        </Link>
      </main>
    )
  }

  return (
    <main className="details-page">
      <Link to="/" className="back-link">
        ← Povratak
      </Link>

      <section className="details-card">
        <p className="details-category">{location.category}</p>
        <h1>{location.name}</h1>
        <p className="details-wait-time">
          Procijenjeno čekanje: {location.waitTime} min
        </p>
      </section>
    </main>
  )
}

export default LocationDetails