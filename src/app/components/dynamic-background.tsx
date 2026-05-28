'use client'
import { useAppContext } from "../context/portfolioContext";
import { useEffect, useState } from "react";

export default function DynamicBackground(){

    const {currentProjectType} = useAppContext();

    const [bgCol, setBgCol] = useState('');
    useEffect(()=> {
        switch(currentProjectType){
            case 'webdev': 
                setBgCol('bg-red-500')
            break
            case 'mobile':
                setBgCol('bg-green-500')
            break
            case 'unreal':
                setBgCol('bg-blue-500')
    }

    }, [currentProjectType]) 

    return (
        <div className={`${bgCol} fixed inset-0 w-full h-full`}>
        </div>
    )
}