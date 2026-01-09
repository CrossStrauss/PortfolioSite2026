'use client'

import Image from 'next/image'
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
                <div className="flex justify-center items-center pt-10">
                    <div className='p-8 rounded-full border-1 border-white aspect-square'>
                        <Image src="/vercel.svg" width={130} height={130} alt="Description" />
                    </div>
                </div>
            </div>
        </div>
    )
}