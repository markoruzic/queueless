export function calculateEstimatedWaitTime(reports) {
  if (!reports.length) {
    return 0
  }

  const average =
    reports.reduce((sum, value) => sum + value, 0) / reports.length

  const recentReports = reports.slice(-3)
  const recentAverage =
    recentReports.reduce((sum, value) => sum + value, 0) / recentReports.length

  const firstRecentValue = recentReports[0]
  const lastRecentValue = recentReports[recentReports.length - 1]
  const trend = lastRecentValue - firstRecentValue

  const weightedEstimate = average * 0.4 + recentAverage * 0.6 + trend * 0.3

  return Math.max(1, Math.round(weightedEstimate))
}