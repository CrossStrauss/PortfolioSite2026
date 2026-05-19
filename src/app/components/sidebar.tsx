'use client'

import { useEffect } from 'react'
import { useAppContext } from '../context/portfolioContext'
// import HexGrid from './hex-grid';
import SideMenu from './sideMenu';

export default function Sidebar() { 
    const {currentProjectType, setCurrentProjectType} = useAppContext();

    useEffect(() => {
        setCurrentProjectType('Unreal');
    }, []);

    return (
        <div className="w-full h-full">
            {/* <HexGrid hexCount={5} hexSize={200} /> */}
            < SideMenu />
        </div>
    )
}