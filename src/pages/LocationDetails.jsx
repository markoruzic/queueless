import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { locations } from '../data/locations'
import { calculateEstimatedWaitTime } from '../services/waitTimeService'
import { useUserProgress } from '../context/UserProgressContext'
import { getGeminiRecommendation } from '../services/geminiRecommendationService'

function getCategoryIcon(category) {
  if (category === 'Pošta') return '📮'
  if (category === 'Banka') return '🏦'
  if (category === 'Ljekarna') return '💊'
  if (category === 'Bolnica') return '🏥'
  if (category === 'Kafić') return '☕'
  if (category === 'Restoran') return '🍽️'
  if (category === 'Trgovina') return '🛒'
  if (category === 'Teretana') return '🏋️'
  return '📍'
}

function getStatus(waitTime) {
  if (waitTime <= 15) {
    return {
      label: 'Vrlo mirno',
      className: 'status-low',
      message: 'Odlično vrijeme za otići',
      description: 'Trenutno se očekuje kratko čekanje.'
    }
  }

  if (waitTime <= 35) {
    return {
      label: 'Umjerena gužva',
      className: 'status-medium',
      message: 'Prihvatljivo vrijeme čekanja',
      description: 'Moguće je kratko zadržavanje.'
    }
  }

  return {
    label: 'Velika gužva',
    className: 'status-high',
    message: 'Bolje pričekati',
    description: 'Trenutno je očekivano duže čekanje.'
  }
}

function LocationDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = locations.find((item) => item.id === Number(id))

  if (!location) {
    return (
      <main className="details-page">
        <h1>Lokacija nije pronađena</h1>
        <Link to="/" className="back-link">Povratak na početnu</Link>
      </main>
    )
  }

  const [reports, setReports] = useState(location.reports)
  const [newReport, setNewReport] = useState('')
  const { addCrowdReport } = useUserProgress()

  const estimatedWaitTime = calculateEstimatedWaitTime(reports)
  const status = getStatus(estimatedWaitTime)

  const latestReports = [...reports].slice(-5).reverse()
  const shortestWait = Math.min(...reports)
  const longestWait = Math.max(...reports)

  const [aiRecommendation, setAiRecommendation] = useState('')
  const [isAiLoading, setIsAiLoading] = useState(false)
  const [aiError, setAiError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const reportValue = Number(newReport)

    if (!reportValue || reportValue < 1 || reportValue > 180) {
      return
    }

    setReports([...reports, reportValue])
    setNewReport('')
    addCrowdReport()
  }

  async function handleAiRecommendation() {
  setIsAiLoading(true)
  setAiError('')
  setAiRecommendation('')

  try {
    const recommendation = await getGeminiRecommendation({
      name: location.name,
      category: location.category,
      estimatedWaitTime,
      statusLabel: status.label,
      reportCount: reports.length,
      shortestWait,
      longestWait,
      recentReports: latestReports
    })

    setAiRecommendation(recommendation)
  } catch (error) {
    setAiError('AI preporuka trenutno nije dostupna. Provjeri API ključ ili pokušaj ponovno kasnije.')
  } finally {
    setIsAiLoading(false)
  }
}

  return (
    <main className="details-page improved-details-page">
      <button
  type="button"
  className="back-link back-button"
  onClick={() => navigate(-1)}
>
  ← Back
</button>

      <section className="location-hero">
        <div className="location-icon">{getCategoryIcon(location.category)}</div>

        <div>
          <h1>{location.name}</h1>
          <p>{location.category}</p>
          <span>Zagreb, Hrvatska</span>
        </div>
      </section>

      <section className="status-card">
        <div>
          <p className="section-label">Current status</p>
          <span className={`status-pill ${status.className}`}>
            {status.label}
          </span>
        </div>

        <div className="wait-time-box">
          <p>Wait time</p>
          <strong>~{estimatedWaitTime} min</strong>
        </div>

        <div className="status-meta">
          <span>Based on {reports.length} reports</span>
          <span>AI-assisted estimate</span>
          <span>Live update</span>
        </div>
      </section>

      <section className="report-card">
        <h2>Report crowd level</h2>
        <p className="report-hint">
  Unesi trenutno vrijeme čekanja u minutama. Prihvaćamo vrijednosti od 1 do 180 minuta.
</p>
        <form onSubmit={handleSubmit} className="report-form">
          <input
            type="number"
            min="1"
            max="180"
            placeholder="Unesi broj minuta"
            value={newReport}
            onChange={(event) => setNewReport(event.target.value)}
          />
          <button type="submit">Pošalji prijavu</button>
        </form>
      </section>

      <section className={`recommendation-card ${status.className}`}>
        <p className="section-label">If you go now</p>
        <h2>{status.message}</h2>
        <p>{status.description}</p>
      </section>

      <section className="trend-card">
        <div className="section-row">
          <h2>Live trend</h2>
          <span className="live-dot">● Live</span>
        </div>

        <div className="trend-bar">
          <div
            className={`trend-fill ${status.className}`}
            style={{
  width: `${Math.min((estimatedWaitTime / 90) * 100, 100)}%`
}}
          />
        </div>

        <div className="trend-labels">
          <span>Quiet</span>
          <span>Very busy</span>
        </div>

        <div className="trend-summary">
          <strong>Stable</strong>
          <p>Procjena se temelji na zadnjim korisničkim prijavama.</p>
        </div>
      </section>

      <section className="ai-insights-card">
  <div className="ai-insights-title">
    <div className="ai-insights-icon">✣</div>
    <h2>AI Insights</h2>
  </div>

  <div className="ai-insight-row">
    <span className="ai-row-icon">◷</span>

    <div>
      <p>Best time to visit</p>
      <strong>
        {estimatedWaitTime <= 15
          ? 'Now'
          : estimatedWaitTime <= 35
            ? 'After 3 PM'
            : 'Later today'}
      </strong>
    </div>
  </div>

  <div className="ai-insight-row">
    <span className="ai-row-icon">↗</span>

    <div>
      <p>Peak hours</p>
      <strong>11 AM – 1 PM</strong>
    </div>
  </div>

  <button
  type="button"
  className="ai-recommendation-button"
  onClick={handleAiRecommendation}
  disabled={isAiLoading}
>
  {isAiLoading ? 'Generating recommendation...' : '✨ Get AI recommendation'}
</button>

{aiRecommendation && (
  <div className="ai-result-box">
    {aiRecommendation}
  </div>
)}

{aiError && (
  <div className="ai-error-box">
    {aiError}
  </div>
)}
</section>

      

      <section className="analytics-card">
        <h2>Sažetak prijava</h2>

        <div className="analytics-grid">
          <div className="analytics-box">
            <span>Najkraće</span>
            <strong>{shortestWait} min</strong>
          </div>

          <div className="analytics-box">
            <span>Najduže</span>
            <strong>{longestWait} min</strong>
          </div>

          <div className="analytics-box">
            <span>Prijava ukupno</span>
            <strong>{reports.length}</strong>
          </div>
        </div>

        <div className="reports-list">
          <h3>Zadnje prijave korisnika</h3>

          {latestReports.map((report, index) => (
            <div key={index} className="report-item">
              <span>Prijava {latestReports.length - index}</span>
              <strong>{report} min</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default LocationDetails