export function calculateEstimatedWaitTime(reports) {
  if (!reports.length) return 0

  // ukloni ekstremne vrijednosti (više od 180 min)
  const validReports = reports.filter((value) => value >= 1 && value <= 180)

  if (!validReports.length) return 0

  const average =
    validReports.reduce((sum, value) => sum + value, 0) / validReports.length

  const recentReports = validReports.slice(-3)

  const recentAverage =
    recentReports.reduce((sum, value) => sum + value, 0) / recentReports.length

  const trend =
    recentReports[recentReports.length - 1] - recentReports[0]

  const estimate = average * 0.4 + recentAverage * 0.6 + trend * 0.2

  return Math.max(1, Math.round(estimate))
}