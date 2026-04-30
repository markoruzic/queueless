import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  useMapEvents
} from 'react-leaflet'

function getMarkerColor(waitTime) {
  if (waitTime <= 15) return '#22c55e'
  if (waitTime <= 35) return '#f59e0b'

  return '#ef4444'
}

function ZoomTracker({ onZoomChange }) {
  useMapEvents({
    zoomend(event) {
      onZoomChange(event.target.getZoom())
    }
  })

  return null
}

function QueueMap({ locations }) {
  const [zoom, setZoom] = useState(12)

  function getMarkerRadius() {
    if (zoom <= 12) return 7
    if (zoom <= 14) return 10
    if (zoom <= 16) return 14

    return 18
  }

  return (
    <MapContainer
      center={[45.815, 15.9819]}
      zoom={12}
      className="queue-map fullscreen-map"
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <ZoomTracker onZoomChange={setZoom} />

      <TileLayer
        attribution="&copy; OpenStreetMap & Carto"
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      {locations.map((location) => (
        <CircleMarker
          key={location.id}
          center={location.coordinates}
          radius={getMarkerRadius()}
          pathOptions={{
            color: 'white',
            fillColor: getMarkerColor(location.waitTime),
            fillOpacity: 1,
            weight: 2
          }}
        >
          <Popup className="queue-leaflet-popup" closeButton={false}>
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