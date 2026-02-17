'use client'

import { useEffect } from 'react'
import { useAppContext } from '../context/portfolioContext'
import SidebarLink from './sidebar-link';
import HexTile from './hex-tile';

export default function Sidebar() { 
    const {currentProjectType, setCurrentProjectType} = useAppContext();

    useEffect(() => {
        setCurrentProjectType('Unreal');
    }, []);

    return (
        <div className="w-full h-full p-3 flex ">
            <HexTile size={38} />
        </div>
    )
}