import { Link } from 'react-router-dom'

function getWaitTimeClass(waitTime) {
  if (waitTime <= 10) return 'wait-low'
  if (waitTime <= 20) return 'wait-medium'
  return 'wait-high'
}

function LocationCard({ location }) {
  return (
    <Link to={`/location/${location.id}`} className="location-card">
      <div>
        <p className="location-category">{location.category}</p>
        <h2>{location.name}</h2>
      </div>

      <div className={`wait-badge ${getWaitTimeClass(location.waitTime)}`}>
        {location.waitTime} min
      </div>
    </Link>
  )
}

export default LocationCard