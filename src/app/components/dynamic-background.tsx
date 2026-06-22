'use client'
import { useAppContext } from "../context/portfolioContext";
import { useEffect, useState } from "react";
import BgGame from './bg_game';
import BgMobile from './bg_mobile';
import BgWeb from './bg_web';

export default function DynamicBackground(){

    const {currentProjectType} = useAppContext();

    const [bgCol, setBgCol] = useState('');
    const [BgComponent, setBgComponent] = useState(() => BgGame);

    const InnerComp = "";

    useEffect(()=> {
        switch(currentProjectType){
            case 'webdev': 
                setBgCol('bg-red-500')
                setBgComponent(() => BgWeb)
            break
            case 'mobile':
                setBgCol('bg-green-500')
                setBgComponent(() => BgMobile)
            break
            case 'unreal':
                setBgCol('bg-blue-500')
                setBgComponent(() => BgGame)
    }

    

    }, [currentProjectType]) 

    return (
        <div className={`${bgCol} fixed inset-0 w-full h-full`}>
            <BgComponent/>
        </div>
    )
}