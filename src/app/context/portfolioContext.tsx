'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type PortfolioContextType = {
  currentProjectType: string,
  setCurrentProjectType: (type: string) => void
}

const AppContext = createContext<PortfolioContextType | undefined>(undefined)


export function AppProvider({ children }: { children: ReactNode }) {
  const [currentProjectType, setCurrentProjectType] = useState('light')

  return (
    <AppContext.Provider value={{ currentProjectType, setCurrentProjectType }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used inside AppProvider')
  }
  return context
}