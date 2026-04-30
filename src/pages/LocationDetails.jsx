import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { locations } from '../data/locations'
import { calculateEstimatedWaitTime } from '../services/waitTimeService'

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

  const estimatedWaitTime = calculateEstimatedWaitTime(reports)
  const status = getStatus(estimatedWaitTime)

  const latestReports = [...reports].slice(-5).reverse()
  const shortestWait = Math.min(...reports)
  const longestWait = Math.max(...reports)

  function handleSubmit(event) {
    event.preventDefault()

    const reportValue = Number(newReport)

    if (!reportValue || reportValue < 1 || reportValue > 180) {
      return
    }

    setReports([...reports, reportValue])
    setNewReport('')
  }

  return (
    <main className="details-page improved-details-page">
      <Link to="/" className="back-link">← Back</Link>

      <section className="location-hero">
        <div className="location-icon">{location.category[0]}</div>

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

      <section className="ai-card">
        <h2>AI Insights</h2>

        <div className="insight-item">
          <span>Best time to visit</span>
          <strong>{estimatedWaitTime <= 15 ? 'Now' : 'Later today'}</strong>
        </div>

        <div className="insight-item">
          <span>Peak hours</span>
          <strong>10 AM – 12 PM</strong>
        </div>

        <button type="button" className="ai-button">
          Get AI recommendation
        </button>
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