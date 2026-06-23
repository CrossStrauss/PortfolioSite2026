'use client'

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction  } from 'react'
import { viewModesType } from '../types/viewModes';

type PortfolioContextType = {
  currentProjectType: string,
  setCurrentProjectType: (type: string) => void,

  viewMode: viewModesType,
  setViewMode:  Dispatch<SetStateAction<viewModesType>>,
}

const AppContext = createContext<PortfolioContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentProjectType, setCurrentProjectType] = useState('home')
  const [viewMode, setViewMode] = useState<viewModesType>(viewModesType.lightMode)

  return (
    <AppContext.Provider value={{ currentProjectType, setCurrentProjectType, viewMode, setViewMode }}>
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