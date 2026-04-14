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
        <div className={'size-12 flex justify-center items-center absolute top-10 right-10 z-6'}>
            <div className='relative size-12 flex justify-center items-center'>
                <div className={`flex relative justify-center items-center w-[85%] h-[85%] hex cursor-pointer z-1 transition-all duration-300 ${viewMode === viewModesType.darkMode ? 'bg-white overflow-hidden' : 'bg-orange-600 overflow-visible'}`}
                    onClick={()=> {
                        toggleViewMode();
                    }}>
                   
                </div>

                 <div className={'absolute inset-0 flex justify-center items-center z-1 pointer-events-none'}>
                    <div className={`relative flex justify-center items-center  ${viewMode === viewModesType.darkMode ? 'opacity-0' : 'opacity-100'}`}>
                        <div className={`w-20 absolute flex justify-between rotate-90 transition-transform duration-300`}>
                            <div className={`size-5 bg-orange-600 triangle -rotate-90 transition-transform duration-300  ${viewMode === viewModesType.darkMode ? 'scale-x-0' : 'scale-x-100'}`}></div>
                            <div className={`size-5 bg-orange-600 triangle rotate-90 transition-transform duration-300  ${viewMode === viewModesType.darkMode ? 'scale-x-0' : 'scale-x-100 delay-150'}`}></div>
                        </div>
                        <div className={`w-20 absolute flex justify-between rotate-30 transition-transform duration-300`}>
                            <div className={`size-5 bg-orange-600 triangle -rotate-90 transition-transform duration-300  ${viewMode === viewModesType.darkMode ? 'scale-x-0' : 'scale-x-100 delay-250'}`}></div>
                            <div className={`size-5 bg-orange-600 triangle rotate-90 transition-transform duration-300  ${viewMode === viewModesType.darkMode ? 'scale-x-0' : 'scale-x-100 delay-100'}`}></div>
                        </div>
                        <div className={`w-20 absolute flex justify-between rotate-150 transition-transform duration-300`}>
                            <div className={`size-5 bg-orange-600 triangle -rotate-90 transition-transform duration-300  ${viewMode === viewModesType.darkMode ? 'scale-x-0' : 'scale-x-100 delay-50'}`}></div>
                            <div className={`size-5 bg-orange-600 triangle rotate-90 transition-transform duration-300  ${viewMode === viewModesType.darkMode ? 'scale-x-0' : 'scale-x-100 delay-200'}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}