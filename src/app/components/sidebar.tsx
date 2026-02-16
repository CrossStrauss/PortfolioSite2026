'use client'

import { useEffect } from 'react'
import { useAppContext } from '../context/portfolioContext'
import SidebarLink from './sidebar-link';
export default function Sidebar() { 
    const {currentProjectType, setCurrentProjectType} = useAppContext();

    useEffect(() => {
        setCurrentProjectType('Unreal');
    }, []);

    return (
        <div className="w-full h-full relative z-2">
            <div className="absolute w-full h-full px-10 py-5 z-3">
                <div className="flex justify-start items-center">
                    <span className="text-3xl">Christopher Strauss</span> 
                </div>
                <div className='flex justify-start flex-col pt-10 gap-4'>
                    <SidebarLink projectType="Unreal" link='projects/unreal' />
                    <SidebarLink projectType="Mobile Apps" link='projects/mobile' />
                    <SidebarLink projectType="WebDev" link='projects/webdev' />
                </div>
            </div>
            <div className="absolute bg-black backdrop-blur-3xl w-full h-full opacity-50"></div>
        </div>
    )
}