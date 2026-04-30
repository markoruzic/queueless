import { createContext, useContext, useEffect, useState } from 'react'

const UserProgressContext = createContext()

const initialProgress = {
  username: 'ktbobas',
  points: 0,
  reports: 0,
  reliabilityScore: 50
}

function UserProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem('queueless-user-progress')

    if (savedProgress) {
      return JSON.parse(savedProgress)
    }

    return initialProgress
  })

  useEffect(() => {
    localStorage.setItem('queueless-user-progress', JSON.stringify(progress))
  }, [progress])

  function addCrowdReport() {
    setProgress((currentProgress) => {
      const updatedReports = currentProgress.reports + 1
      const updatedPoints = currentProgress.points + 10
      const updatedReliabilityScore = Math.min(
        100,
        currentProgress.reliabilityScore + 2
      )

      return {
        ...currentProgress,
        points: updatedPoints,
        reports: updatedReports,
        reliabilityScore: updatedReliabilityScore
      }
    })
  }

  function getContributorLevel() {
    if (progress.points >= 200) return 'Trusted Contributor'
    if (progress.points >= 50) return 'Active Contributor'
    return 'New User'
  }

  function getNextLevelInfo() {
    if (progress.points >= 200) {
      return {
        label: 'Max level reached',
        requiredPoints: 200,
        remainingPoints: 0
      }
    }

    if (progress.points >= 50) {
      return {
        label: 'pts to Trusted Contributor',
        requiredPoints: 200,
        remainingPoints: 200 - progress.points
      }
    }

    return {
      label: 'pts to Active Contributor',
      requiredPoints: 50,
      remainingPoints: 50 - progress.points
    }
  }

  const value = {
    progress,
    addCrowdReport,
    contributorLevel: getContributorLevel(),
    nextLevelInfo: getNextLevelInfo()
  }

  return (
    <UserProgressContext.Provider value={value}>
      {children}
    </UserProgressContext.Provider>
  )
}

function useUserProgress() {
  return useContext(UserProgressContext)
}

export { UserProgressProvider, useUserProgress }