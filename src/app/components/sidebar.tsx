'use client'

import { useEffect } from 'react'
import { useAppContext } from '../context/portfolioContext'
import SkewedButton from './skewedButton';

export default function Sidebar() { 
    const {currentProjectType, setCurrentProjectType} = useAppContext();

    useEffect(() => {
        setCurrentProjectType('Unreal');
    }, []);

    return (
        <div className="w-full h-full relative">
            <div className="absolute bg-gray-200 w-full h-full px-10 py-5">
                <div className="flex justify-start items-center">
                    <span className="text-3xl">Christopher Strauss</span> 
                </div>
                <div className='flex justify-start flex-col pt-10 gap-4'>
                    <SkewedButton />
                    <SkewedButton />
                    <SkewedButton />
                </div>
            </div>
        </div>
    )
}