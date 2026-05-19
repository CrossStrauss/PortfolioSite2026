import Image from 'next/image'
export default function sideMenu() {
    return (
        <div className="w-[20%] transition-width duration-300 h-full bg-white z-1 relative bg-linear-to-t from-gray-900 to-gray-400 flex justify-center">
            <div className="w-[80%] h-full bg-gray-200 flex justify-between flex-col">


                <div className="w-full pt-10">
                    <div className="w-full flex flex-col gap-6 flex justify-end items-center pb-10">
                        <div className="w-[80%] aspect-square cursor-pointer hover:scale-[1.1] transition-scale duration-300">
                            <Image
                                src="/logos/webDev.svg"
                                width={200}
                                height={200}
                                alt="Picture of the author"
                                className='w-full'
                            />
                        
                        </div>
                    
                        <div className="w-[80%] aspect-square cursor-pointer hover:scale-[1.1] transition-scale duration-300">
                            <Image
                                src="/logos/UnrealDev.svg"
                                width={200}
                                height={200}
                                alt="Picture of the author"
                                className='w-full'
                            />
                        </div>
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