import HexTile from "./hex-tile";

type HexGridProps = {
  hexCount: number;
  hexSize: number;
};

export default function HexGrid({ hexCount, hexSize }: HexGridProps) {

    function generateHexTiles(count: number, size: number) {
        return Array.from({ length: count }, (_, index) => {
            return <HexTile key={index} size={size} index={index} />
        });
    }

    return (
        <div className="hex-grid p-10 relative z-1">
            {generateHexTiles(hexCount, hexSize)}
        </div>
    );
}
