'use client'

import { useEffect } from 'react'
import { useAppContext } from '../context/portfolioContext'
import HexGrid from './hex-grid';

export default function Sidebar() { 
    const {currentProjectType, setCurrentProjectType} = useAppContext();

    useEffect(() => {
        setCurrentProjectType('Unreal');
    }, []);

    return (
        <div className="w-full h-full p-3">
            <HexGrid hexCount={5} hexSize={200} />
        </div>
    )
}