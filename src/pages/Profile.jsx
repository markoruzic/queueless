import BottomNavigation from '../components/BottomNavigation'
import { useUserProgress } from '../context/UserProgressContext'

function Profile() {
  const { progress, contributorLevel, nextLevelInfo } = useUserProgress()

  const userPoints = progress.points
  const reliabilityScore = progress.reliabilityScore
  const nextLevelPoints = nextLevelInfo.requiredPoints
  const progressPercentage = Math.min((userPoints / nextLevelPoints) * 100, 100)

  const reportLabel =
    progress.reports === 1 ? 'prijavu' : 'prijava'

  return (
    <main className="profile-page">
      <section className="profile-header">
        <div className="profile-user">
          <div className="profile-avatar">👤</div>

          <div>
            <h1>Tvoj profil</h1>
            <p>{contributorLevel}</p>
          </div>
        </div>

        <div className="profile-points">
          <strong>{userPoints}</strong>
          <span>bodova</span>
        </div>
      </section>

      <section className="profile-card">
        <p className="section-label">Razina korisnika</p>

        <div className="profile-row">
          <span>{contributorLevel}</span>
          <span>
            {nextLevelInfo.remainingPoints} {nextLevelInfo.label}
          </span>
        </div>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <p className="profile-muted">
          Nastavi slati prijave kako bi povećao svoju razinu.
        </p>
      </section>

      <section className="profile-card profile-impact-card">
        <div className="profile-mini-icon">⏱️</div>

        <div>
          <h2>100+ sati ušteđeno danas</h2>
          <p>Ukupno među QueueLess korisnicima</p>
        </div>
      </section>

      <section className="profile-card">
        <div className="profile-row">
          <div>
            <h2>Ocjena pouzdanosti</h2>
          </div>

          <strong className="profile-score">{reliabilityScore}</strong>
        </div>

        <div className="progress-track">
          <div
            className="progress-fill dark"
            style={{ width: `${reliabilityScore}%` }}
          />
        </div>

        <p className="profile-muted">Izgradnja povjerenja</p>
        <p className="profile-description">
          Točne prijave povećavaju tvoju pouzdanost i daju veću težinu tvojim
          budućim prijavama u procjeni gužve.
        </p>
      </section>

      <section className="profile-card">
        <p className="section-label">Kako skupljati bodove</p>

        <div className="points-list">
          <div className="points-item">
            <div>
              <h3>Prijavi stanje gužve</h3>
              <p>Unesi trenutno vrijeme čekanja na lokaciji</p>
            </div>
            <strong>+10 bodova</strong>
          </div>

          <div className="points-item">
            <div>
              <h3>Potvrdi točnost</h3>
              <p>Potvrdi da je postojeća prijava korisna i točna</p>
            </div>
            <strong>+8 bodova</strong>
          </div>

          <div className="points-item">
            <div>
              <h3>Prijavi dolazak</h3>
              <p>Zabilježi svoj posjet odabranoj lokaciji</p>
            </div>
            <strong>+5 bodova</strong>
          </div>
        </div>
      </section>

      <section className="profile-message">
        {userPoints === 0
          ? 'Pošalji svoju prvu prijavu gužve kako bi počeo skupljati bodove i graditi svoj profil.'
          : `Poslao si ${progress.reports} ${reportLabel} i skupio ${userPoints} bodova.`}
      </section>

      <BottomNavigation />
    </main>
  )
}

export default Profile