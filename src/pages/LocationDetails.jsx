import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { locations } from '../data/locations'
import { calculateEstimatedWaitTime } from '../services/waitTimeService'

function LocationDetails() {
  const { id } = useParams()
  const location = locations.find((item) => item.id === Number(id))

  if (!location) {
    return (
      <main className="details-page">
        <h1>Lokacija nije pronađena</h1>
        <Link to="/" className="back-link">
          Povratak na početnu
        </Link>
      </main>
    )
  }

  const [reports, setReports] = useState(location.reports)
  const [newReport, setNewReport] = useState('')

  const estimatedWaitTime = calculateEstimatedWaitTime(reports)
  const latestReports = [...reports].slice(-5).reverse()
  const shortestWait = Math.min(...reports)
  const longestWait = Math.max(...reports)

  function handleSubmit(event) {
    event.preventDefault()

    const reportValue = Number(newReport)

    if (!reportValue || reportValue < 1) {
      return
    }

    setReports([...reports, reportValue])
    setNewReport('')
  }

  return (
    <main className="details-page">
      <Link to="/" className="back-link">
        ← Povratak
      </Link>

      <section className="details-card">
        <p className="details-category">{location.category}</p>
        <h1>{location.name}</h1>
        <p className="details-wait-time">
            Procijenjeno čekanje: {estimatedWaitTime} min
        </p>
        <p className="details-note">AI-assisted procjena temeljena na prijavama korisnika</p>
        <p>Broj prijava korisnika: {reports.length}</p>
      </section>

      <section className="report-card">
        <h2>Prijavi trenutno čekanje</h2>

        <form onSubmit={handleSubmit} className="report-form">
          <input
            type="number"
            placeholder="Unesi broj minuta"
            value={newReport}
            onChange={(event) => setNewReport(event.target.value)}
          />
          <button type="submit">Pošalji prijavu</button>
        </form>
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