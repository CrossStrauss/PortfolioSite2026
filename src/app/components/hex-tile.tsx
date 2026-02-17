type hexTileProps = {
    size: number;
};

export default function HexTile({ size }: hexTileProps) {
    return (
        <div className={`w-${size} h-${size} bg-gray-900 hex flex items-center justify-center group`}>
            <div className="w-[97%] h-[97%] group-hover:w-[94%] group-hover:h-[94%] cursor-pointer transition-all duration-100 bg-white hex">

            </div>
        </div>
    )
}
