import { Link } from 'react-router-dom'

function LocationCard({ location }) {
  return (
    <Link to={`/location/${location.id}`} className="location-card">
      <h2>{location.name}</h2>
      <p>{location.category}</p>
      <strong>{location.waitTime} min čekanja</strong>
    </Link>
  )
}

export default LocationCard