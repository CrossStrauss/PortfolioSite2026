import { useState, useEffect } from "react"

type hexTileProps = {
    size: number;
    index: number;
};

export default function HexTile({ size, index }: hexTileProps) {
    const [alternator, setAlternator] = useState(0);

    function flipFlop() {
        if (index % 2 === 0) {
            setAlternator(0);
        } else {
            setAlternator(1);
        }
    }

    useEffect(() => {
        flipFlop();
    },[]);

    return (
        <div style={{ width: size, height: size, transform: `translate(${alternator * (size*0.78)}px) translateY(${index * (size/2.2)}px)` }}
             className={`size-${size} absolute bg-gray-900 hex flex items-center justify-center group`}>
            <div className="w-[97%] h-[97%] group-hover:w-[94%] group-hover:h-[94%] cursor-pointer transition-all duration-100 bg-white hex">
                {alternator}
            </div>
        </div>
    )
}
