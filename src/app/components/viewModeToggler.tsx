'use client'

import { useAppContext } from '../context/portfolioContext'
import { viewModesType } from '../types/viewModes';


export default function ViewModeToggler() {
    const { viewMode, setViewMode } = useAppContext();

    const toggleViewMode = () => {
        setViewMode((prevMode) =>
        prevMode === viewModesType.lightMode ? viewModesType.darkMode : viewModesType.lightMode
        );
    };

    return (
        <div className={'size-12 flex justify-center items-center'}>
            <div className={`flex  relative justify-center items-center w-[85%] h-[85%] rounded-full cursor-pointer z-4 transition-all duration-300 ${viewMode === viewModesType.darkMode ? 'bg-white overflow-hidden' : 'bg-orange-600 overflow-visible'}`}
                onClick={()=> {
                    toggleViewMode();
                }}>
                <div className={'absolute'}>
                    <div className={`relative flex justify-center items-center  ${viewMode === viewModesType.darkMode ? 'opacity-0' : 'opacity-100'}`}>
                        <div className={'w-16 absolute flex justify-between'}>
                            <div className='size-2 rounded-full bg-orange-600'></div>
                            <div className='size-2 rounded-full bg-orange-600'></div>
                        </div>
                        <div className={`w-16 absolute flex justify-between rotate-90  ${viewMode === viewModesType.darkMode ? 'opacity-0' : 'opacity-100'}`}>
                            <div className='size-2 rounded-full bg-orange-600'></div>
                            <div className='size-2 rounded-full bg-orange-600'></div>
                        </div>
                        <div className={`w-16 absolute flex justify-between rotate-45  ${viewMode === viewModesType.darkMode ? 'opacity-0' : 'opacity-100'}`}>
                            <div className='size-2 rounded-full bg-orange-600'></div>
                            <div className='size-2 rounded-full bg-orange-600'></div>
                        </div>
                        <div className={`w-16 absolute flex justify-between rotate-135  ${viewMode === viewModesType.darkMode ? 'opacity-0' : 'opacity-100'}`}>
                            <div className='size-2 rounded-full bg-orange-600'></div>
                            <div className='size-2 rounded-full bg-orange-600'></div>
                        </div>
                    </div>
                </div>
                <div className={`size-11 bg-[#444444] absolute rounded-full z-10 translate-x-[11px]  ${viewMode === viewModesType.darkMode ? 'opacity-100 transition-all duration-300' : 'opacity-0'}`}>

                </div>
            </div>
        </div>
    )
}