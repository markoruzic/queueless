import LocationCard from '../components/LocationCard'
import { locations } from '../data/locations'

function Home() {
  return (
    <main>
      <h1>QueueLess</h1>
      <p>Pronađi lokaciju i provjeri čekanje.</p>

      {locations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </main>
  )
}

export default Home