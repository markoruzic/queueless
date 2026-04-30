import { useNavigate, useParams } from 'react-router-dom'
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

function getBestVisitTime(waitTime) {
  if (waitTime <= 15) return 'Sada'
  if (waitTime <= 35) return 'Nakon 15 sati'

  return 'Kasnije danas'
}

function LocationDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = locations.find((item) => item.id === Number(id))

  const [reports, setReports] = useState(location?.reports || [])
  const [newReport, setNewReport] = useState('')
  const [aiRecommendation, setAiRecommendation] = useState('')
  const [isAiLoading, setIsAiLoading] = useState(false)
  const [aiError, setAiError] = useState('')

  const { addCrowdReport } = useUserProgress()

  if (!location) {
    return (
      <main className="details-page">
        <h1>Lokacija nije pronađena</h1>

        <button
          type="button"
          className="back-link back-button"
          onClick={() => navigate('/')}
        >
          Povratak na početnu
        </button>
      </main>
    )
  }

  const estimatedWaitTime = calculateEstimatedWaitTime(reports)
  const status = getStatus(estimatedWaitTime)

  const recentReports = reports.slice(-5)
  const latestReportsForDisplay = [...recentReports].reverse()
  const shortestWait = Math.min(...reports)
  const longestWait = Math.max(...reports)

  function handleSubmit(event) {
    event.preventDefault()

    const reportValue = Number(newReport)

    if (!reportValue || reportValue < 1 || reportValue > 180) {
      return
    }

    setReports((currentReports) => [...currentReports, reportValue])
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
        recentReports
      })

      setAiRecommendation(recommendation)
    } catch (error) {
      setAiError(
        'AI preporuka trenutno nije dostupna. Provjeri API ključ ili pokušaj ponovno kasnije.'
      )
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
        ← Natrag
      </button>

      <section className="location-hero">
        <div className="location-icon">
          {getCategoryIcon(location.category)}
        </div>

        <div>
          <h1>{location.name}</h1>
          <p>{location.category}</p>
          <span>Zagreb, Hrvatska</span>
        </div>
      </section>

      <section className="status-card">
        <div>
          <p className="section-label">Trenutno stanje</p>
          <span className={`status-pill ${status.className}`}>
            {status.label}
          </span>
        </div>

        <div className="wait-time-box">
          <p>Vrijeme čekanja</p>
          <strong>~{estimatedWaitTime} min</strong>
        </div>

        <div className="status-meta">
          <span>Temeljeno na {reports.length} prijava</span>
          <span>AI potpomognuta procjena</span>
          <span>Ažuriranje uživo</span>
        </div>
      </section>

      <section className="report-card">
        <h2>Prijavi gužvu</h2>

        <p className="report-hint">
          Unesi trenutno vrijeme čekanja u minutama. Prihvaćamo vrijednosti od
          1 do 180 minuta.
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
        <p className="section-label">Ako ideš sada</p>
        <h2>{status.message}</h2>
        <p>{status.description}</p>
      </section>

      <section className="trend-card">
        <div className="section-row">
          <h2>Trend uživo</h2>
          <span className="live-dot">● Uživo</span>
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
          <span>Mirno</span>
          <span>Velika gužva</span>
        </div>

        <div className="trend-summary">
          <strong>Stabilno</strong>
          <p>Procjena se temelji na zadnjim korisničkim prijavama.</p>
        </div>
      </section>

      <section className="ai-insights-card">
        <div className="ai-insights-title">
          <div className="ai-insights-icon">✣</div>
          <h2>AI uvidi</h2>
        </div>

        <div className="ai-insight-row">
          <span className="ai-row-icon">◷</span>

          <div>
            <p>Najbolje vrijeme za posjet</p>
            <strong>{getBestVisitTime(estimatedWaitTime)}</strong>
          </div>
        </div>

        <div className="ai-insight-row">
          <span className="ai-row-icon">↗</span>

          <div>
            <p>Najveća gužva</p>
            <strong>11:00 – 13:00</strong>
          </div>
        </div>

        <button
          type="button"
          className="ai-recommendation-button"
          onClick={handleAiRecommendation}
          disabled={isAiLoading}
        >
          {isAiLoading
            ? 'Generiranje preporuke...'
            : '✨ Dohvati AI preporuku'}
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
            <span>Ukupno prijava</span>
            <strong>{reports.length}</strong>
          </div>
        </div>

        <div className="reports-list">
          <h3>Zadnje prijave korisnika</h3>

          {latestReportsForDisplay.map((report, index) => (
            <div key={`${report}-${index}`} className="report-item">
              <span>Prijava {latestReportsForDisplay.length - index}</span>
              <strong>{report} min</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default LocationDetails