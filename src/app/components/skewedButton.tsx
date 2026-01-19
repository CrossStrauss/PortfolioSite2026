
export default function SkewedButton() {
    return (
    <div className="-skew-x-45 group relative flex justify-between bg-gray-400 w-[65%] cursor-pointer ps-6 pe-2 py-1 hover:translate-x-4 transition-all duration-300">
        <span className="skew-x-45">Link Text</span>
        <div className="w-[10%] bg-white group-hover:bg-black transition-all duration-300"></div>
    </div>
    )
}
