'use client'

import Image from 'next/image'
import ThreeScene from './ThreeScene'
import { useEffect } from 'react'
import { useAppContext } from '../context/portfolioContext'

export default function Sidebar() { 
    const {currentProjectType, setCurrentProjectType} = useAppContext();

    useEffect(() => {
        setCurrentProjectType('Unreal');
    }, []);

    return (
        <div className="w-full h-full relative">
            <div className="absolute bg-gray-200 w-full h-full">
                <div className="flex justify-center items-center pt-5">
                    <span className="text-2xl">Christopher Strauss</span> 
                    <div className='aspect-square w-[50px]'>
                       <ThreeScene/>
                    </div>
                </div>
            </div>
        </div>
    )
}