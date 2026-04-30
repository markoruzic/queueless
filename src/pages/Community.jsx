import BottomNavigation from '../components/BottomNavigation'

function Community() {
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

        <div className="leaderboard-card">
          <div className="leaderboard-left">
            <span className="rank-icon">🏆</span>

            <div className="user-avatar">K</div>

            <div>
              <h2>ktbobas</h2>
              <p>New User · 6 reports</p>
            </div>
          </div>

          <div className="leaderboard-score">
            <strong>46</strong>
            <span>score</span>
          </div>
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
              <h2>ktbobas</h2>
              <p>6 reports · New contributor</p>
            </div>
          </div>

          <span className="rising-badge">↗ Rising</span>
        </div>
      </section>

      <section className="score-info-card">
        <p className="section-label">How scores work</p>
        <p>
          Your community score is 60% reliability (accuracy of reports) + 40% total points earned.
          Submit accurate crowd reports to climb the leaderboard.
        </p>
      </section>

      <BottomNavigation />
    </main>
  )
}

export default Community