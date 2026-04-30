import BottomNavigation from '../components/BottomNavigation'

function Profile() {
  return (
    <main className="placeholder-page">
      <section className="placeholder-card">
        <div className="placeholder-icon">⚙️</div>
        <h1>Profile</h1>
        <p>
          Profil korisnika bit će dostupan u sljedećoj verziji aplikacije.
        </p>
        <p>
          Ovdje će korisnik moći pratiti svoje prijave čekanja, spremljene lokacije i osobne postavke.
        </p>
      </section>

      <BottomNavigation />
    </main>
  )
}

export default Profile