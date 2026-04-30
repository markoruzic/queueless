import BottomNavigation from '../components/BottomNavigation'
import { useUserProgress } from '../context/UserProgressContext'

function Community() {
  const { progress, contributorLevel } = useUserProgress()

  const yourScore = Math.round(
  progress.reliabilityScore * 0.6 + progress.points * 0.4
  )

  const users = [
    {
      id: 1,
      username: 'ktbobas',
      level: 'Aktivni doprinositelj',
      reports: 6,
      score: 60,
      avatar: 'K'
    },
    {
      id: 2,
      username: 'Tvoj profil',
      level: contributorLevel,
      reports: progress.reports,
      score: yourScore,
      avatar: 'T',
      isCurrentUser: true
    }
  ].sort((a, b) => b.score - a.score)

  return (
    <main className="community-page">
      <section className="community-header">
        <div>
          <div className="community-title-row">
            <span className="community-title-icon">🛡️</span>
            <h1>Zajednica</h1>
          </div>

          <p>Ljestvica korisnika za travanj 2026.</p>
        </div>
      </section>

      <section className="community-section">
        <p className="section-label">Najbolji doprinositelji</p>

        <div className="leaderboard-list">
          {users.map((user, index) => (
            <div
              key={user.id}
              className={
                user.isCurrentUser
                  ? 'leaderboard-card leaderboard-card-current'
                  : 'leaderboard-card'
              }
            >
              <div className="leaderboard-left">
                <span className="rank-icon">
                  {index === 0 ? '🏆' : `#${index + 1}`}
                </span>

                <div className="user-avatar">{user.avatar}</div>

                <div>
                  <h2>{user.username}</h2>
                  <p>
                    {user.level} · {user.reports}{' '}
                    {user.reports === 1 ? 'prijava' : 'prijava'}
                  </p>
                </div>
              </div>

              <div className="leaderboard-score">
                <strong>{user.score}</strong>
                <span>rezultat</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="community-section">
        <div className="section-title-row">
          <span className="rising-icon">🔥</span>
          <p className="section-label">Korisnici u usponu</p>
        </div>

        <p className="community-muted">
          Novi korisnici koji doprinose zajednici i pomažu drugima izbjeći čekanje.
        </p>

        <div className="rising-card">
          <div className="leaderboard-left">
            <div className="star-box">☆</div>

            <div>
              <h2>Tvoj profil</h2>
              <p>
                {progress.reports} {progress.reports === 1 ? 'prijava' : 'prijava'} ·{' '}
                {contributorLevel}
              </p>
            </div>
          </div>

          <span className="rising-badge">
            {progress.reports > 0 ? '↗ U usponu' : 'Započni'}
          </span>
        </div>
      </section>

      <section className="score-info-card">
        <p className="section-label">Kako funkcioniraju bodovi</p>

        <p>
          Rezultat zajednice računa se prema formuli: 60% ocjena pouzdanosti i 40%
          ukupni bodovi. Točne prijave povećavaju pouzdanost, a svaki doprinos donosi
          bodove za napredak na ljestvici.
        </p>

        <div className="score-breakdown">
          <div>
            <span>Pouzdanost</span>
            <strong>{progress.reliabilityScore}</strong>
          </div>

          <div>
            <span>Bodovi</span>
            <strong>{progress.points}</strong>
          </div>

          <div>
            <span>Prijave</span>
            <strong>{progress.reports}</strong>
          </div>
        </div>
      </section>

      <BottomNavigation />
    </main>
  )
}

export default Community