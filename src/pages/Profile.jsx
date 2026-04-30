import BottomNavigation from '../components/BottomNavigation'
import { useUserProgress } from '../context/UserProgressContext'

function Profile() {
  const { progress, contributorLevel, nextLevelInfo } = useUserProgress()
const userPoints = progress.points
const reliabilityScore = progress.reliabilityScore
const nextLevelPoints = nextLevelInfo.requiredPoints

  return (
    <main className="profile-page">
      <section className="profile-header">
        <div className="profile-user">
          <div className="profile-avatar">👤</div>

          <div>
            <h1>Your Profile</h1>
            <p>{contributorLevel}</p>
          </div>
        </div>

        <div className="profile-points">
          <strong>{userPoints}</strong>
          <span>points</span>
        </div>
      </section>

      <section className="profile-card">
        <p className="section-label">Contributor level</p>

        <div className="profile-row">
          <span>{contributorLevel}</span>
          <span>
  {nextLevelInfo.remainingPoints} {nextLevelInfo.label}
</span>
        </div>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${Math.min((userPoints / nextLevelPoints) * 100, 100)}%` }}
          />
        </div>

        <p className="profile-muted">Just getting started</p>
      </section>

      <section className="profile-card profile-impact-card">
        <div className="profile-mini-icon">⏱️</div>

        <div>
          <h2>100+ hours saved today</h2>
          <p>Across all QueueLess users worldwide</p>
        </div>
      </section>

      <section className="profile-card">
        <div className="profile-row">
          <div>
            <h2>Reliability Score</h2>
          </div>

          <strong className="profile-score">{reliabilityScore}</strong>
        </div>

        <div className="progress-track">
          <div
            className="progress-fill dark"
            style={{ width: `${reliabilityScore}%` }}
          />
        </div>

        <p className="profile-muted">Building trust</p>
        <p className="profile-description">
          Accurate contributions increase your score and give your reports more weight in crowd predictions.
        </p>
      </section>

      <section className="profile-card">
        <p className="section-label">How to earn points</p>

        <div className="points-list">
          <div className="points-item">
            <div>
              <h3>Submit crowd status</h3>
              <p>Report current conditions at a location</p>
            </div>
            <strong>+10 pts</strong>
          </div>

          <div className="points-item">
            <div>
              <h3>Confirm accuracy</h3>
              <p>Verify an existing report is correct</p>
            </div>
            <strong>+8 pts</strong>
          </div>

          <div className="points-item">
            <div>
              <h3>Check in</h3>
              <p>Log your visit at a location</p>
            </div>
            <strong>+5 pts</strong>
          </div>
        </div>
      </section>

      <section className="profile-message">
        {userPoints === 0
  ? 'Submit your first crowd report to start earning points and building your contributor profile.'
  : `You have submitted ${progress.reports} reports and earned ${userPoints} points.`}
      </section>

      <BottomNavigation />
    </main>
  )
}

export default Profile