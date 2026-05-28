import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { useAppContext } from '../context/portfolioContext'

export default function sideMenu() {
    const {currentProjectType, setCurrentProjectType} = useAppContext();


    return (
        <div className="w-full transition-width duration-300 h-full bg-white z-1 relative bg-linear-to-t from-gray-900 to-gray-400 flex justify-center">
            <div className="w-[80%] h-full bg-gray-200 flex justify-between flex-col relative">
                
                <div className='absolute bottom-25 w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-auto scale-[1.65] opacity-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-auto scale-[1.65] opacity-30">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-auto scale-[1.65] opacity-40">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </div>

                <div className="w-full pt-10">
                    <div className="w-full flex flex-col gap-6 flex justify-end items-center pb-10">
                        <Link   href='/projects/webdev' 
                                className='w-[70%]'
                                onClick={() => setCurrentProjectType("webdev")}>
                            <div className="w-full aspect-square cursor-pointer hover:scale-[1.1] transition-scale duration-300 mt-3">
                                <Image
                                    src="/logos/webDev.svg"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                    className='w-full'
                                />

                            </div>
                        </Link>

                        <Link href='/projects/unreal' className='w-[70%]' onClick={() => setCurrentProjectType("unreal")}>
                            <div className="w-full aspect-square cursor-pointer hover:scale-[1.1] transition-scale duration-300 mt-3">
                                <Image
                                    src="/logos/UnrealDev.svg"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                    className='w-full'
                                />
                            </div>
                        </Link>
                        
                        <Link href='/projects/mobile' className='w-[70%]' onClick={() => setCurrentProjectType("mobile")}>
                        <div className="w-full aspect-square cursor-pointer hover:scale-[1.1] transition-scale duration-300 mt-3">
                            <Image
                                src="/logos/MobileDev.svg"
                                width={200}
                                height={200}
                                alt="Picture of the author"
                                className='w-full'
                            />
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-6 flex justify-end items-center pb-10">
                    <div className="w-[30%] aspect-square cursor-pointer hover:scale-[1.1] transition-scale duration-300">
                        <Image
                            src="/logos/git_logo.svg"
                            width={200}
                            height={200}
                            alt="Picture of the author"
                            className='w-full'
                        />
                    </div>
                    <div className="w-[30%] aspect-square cursor-pointer hover:scale-[1.1] transition-scale duration-300">
                        <Image
                            src="/logos/linkedIn.svg"
                            width={200}
                            height={200}
                            alt="Picture of the author"
                            className='w-full'
                        />
                    </div>
                </div>

            </div>
        </div>
    )
       
}
