function LocationCard({ location }) {
  return (
    <div className="location-card">
      <h2>{location.name}</h2>
      <p>{location.category}</p>
      <strong>{location.waitTime} min čekanja</strong>
    </div>
  )
}

export default LocationCard