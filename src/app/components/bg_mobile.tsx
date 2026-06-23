export default function BgMobile() {
    return (
        <div className="w-full h-full grid grid-cols-2 relative">
            <div className="bg-red-900">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    >
                    <source src="https://videos.pexels.com/video-files/3913493/3913493-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="bg-red-900">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    >
                    <source src="https://videos.pexels.com/video-files/12991910/12991910-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="absolute w-full h-full flex justify-center">
                <div className="w-[25%] h-full grid grid-cols-1">
                    <div
                    className="w-0 h-0
                            border-l-[50px] border-r-[50px]
                            border-b-[100px]
                            border-l-transparent border-r-transparent
                            border-b-red-500">
                    </div>
                
                </div>
            </div>
        </div>
    )
}

// https://videos.pexels.com/video-files/12991910/12991910-uhd_2560_1440_30fps.mp4