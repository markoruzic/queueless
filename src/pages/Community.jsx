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
      level: 'Active Contributor',
      reports: 6,
      score: 46,
      avatar: 'K'
    },
    {
      id: 2,
      username: 'Your Profile',
      level: contributorLevel,
      reports: progress.reports,
      score: yourScore,
      avatar: 'Y'
    }
  ].sort((a, b) => b.score - a.score)

  return (
    <main className="community-page">
      <section className="community-header">
        <div>
          <div className="community-title-row">
            <span className="community-title-icon">🛡️</span>
            <h1>Community</h1>
          </div>

          <p>travanj 2026. leaderboard</p>
        </div>
      </section>

      <section className="community-section">
        <p className="section-label">Top contributors</p>

        <div className="leaderboard-list">
          {users.map((user, index) => (
            <div
              key={user.id}
              className={
                user.username === 'Your Profile'
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
                    {user.reports === 1 ? 'report' : 'reports'}
                  </p>
                </div>
              </div>

              <div className="leaderboard-score">
                <strong>{user.score}</strong>
                <span>score</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="community-section">
        <div className="section-title-row">
          <span className="rising-icon">🔥</span>
          <p className="section-label">Rising stars</p>
        </div>

        <p className="community-muted">
          New contributors making their mark — keep it up!
        </p>

        <div className="rising-card">
          <div className="leaderboard-left">
            <div className="star-box">☆</div>

            <div>
              <h2>Your Profile</h2>
              <p>
                {progress.reports} {progress.reports === 1 ? 'report' : 'reports'} ·{' '}
                {contributorLevel}
              </p>
            </div>
          </div>

          <span className="rising-badge">
            {progress.reports > 0 ? '↗ Rising' : 'Start'}
          </span>
        </div>
      </section>

      <section className="score-info-card">
        <p className="section-label">How scores work</p>

        <p>
          Community score is calculated from reliability and earned points.
          Accurate crowd reports improve your score and help other users avoid
          unnecessary waiting.
        </p>

        <div className="score-breakdown">
          <div>
            <span>Reliability</span>
            <strong>{progress.reliabilityScore}</strong>
          </div>

          <div>
            <span>Points</span>
            <strong>{progress.points}</strong>
          </div>

          <div>
            <span>Reports</span>
            <strong>{progress.reports}</strong>
          </div>
        </div>
      </section>

      <BottomNavigation />
    </main>
  )
}

export default Community