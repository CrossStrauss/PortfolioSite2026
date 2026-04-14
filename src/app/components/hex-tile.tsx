import { useState, useEffect } from "react"

type hexTileProps = {
    size: number;
    index: number;
    innerItem: React.ReactNode;
};

export default function HexTile({ size, index, innerItem }: hexTileProps) {
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
            className={`size-${size} absolute hex flex items-center justify-center group backdrop-blur-xs transition-all duration-300 hover:backdrop-blur-md backdrop-saturate-[196%] bg-[rgba(92,157,168,0.46)] rounded-xl border border-[rgba(209,213,219,0.3)]`}>
            {innerItem}
        </div>
    )
}
