import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'

function getMarkerColor(waitTime) {
  if (waitTime <= 10) return '#16a34a'
  if (waitTime <= 20) return '#f59e0b'
  return '#ef4444'
}

function QueueMap({ locations }) {
  return (
    <MapContainer
      center={[45.815, 15.9819]}
      zoom={12}
      className="queue-map fullscreen-map"
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((location) => (
        <CircleMarker
          key={location.id}
          center={location.coordinates}
          radius={20}
          pathOptions={{
            color: getMarkerColor(location.waitTime),
            fillColor: getMarkerColor(location.waitTime),
            fillOpacity: 0.85,
            weight: 3
          }}
        >
          <Popup>
            <div className="map-popup">
              <strong>{location.name}</strong>
              <span>{location.category}</span>
              <p>{location.waitTime} min čekanja</p>

              <Link to={`/location/${location.id}`} className="popup-link">
                Pogledaj detalje
              </Link>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  )
}

export default QueueMap