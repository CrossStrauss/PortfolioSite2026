'use client'
import { useAppContext } from "../context/portfolioContext";
import { useEffect, useState } from "react";
import BgGame from './bg_game';
import BgMobile from './bg_mobile';
import BgWeb from './bg_web';

export default function DynamicBackground(){

    const {currentProjectType} = useAppContext();

    const [BgComponent, setBgComponent] = useState(() => BgMobile);

    const InnerComp = "";

    useEffect(()=> {
        
        console.log('Current Project:' + currentProjectType);

        switch(currentProjectType){
            case 'home':
                setBgComponent(() => BgWeb)
                console.log("rendering webDev")
            case 'webdev': 
                setBgComponent(() => BgWeb)
                console.log("rendering webDev")
            break
            case 'mobile':
                setBgComponent(() => BgMobile)
                console.log("rendering mobile")
            break
            case 'unreal':
                setBgComponent(() => BgGame)
                console.log("rendering unreal");
    }


    }, [currentProjectType]) 

    return (
        <div className={`fixed inset-0 w-full h-full`}>
            <BgComponent/>
        </div>
    )
}