import HexTile from "./hex-tile";
import ProfileIcon from "./profile-comp";
import ProjectComp from "./project-comp";
type HexGridProps = {
  hexCount: number;
  hexSize: number;
};

export default function HexGrid({ hexCount, hexSize }: HexGridProps) {

    const hexComponents: React.ReactNode[] = [];
    hexComponents.push(<ProfileIcon />);
    hexComponents.push(<ProjectComp />);
    hexComponents.push(<ProjectComp />);
    hexComponents.push(<ProjectComp />);

    function generateHexTiles(count: number, size: number) {
        return Array.from({ length: count }, (_, index) => {
            return <HexTile key={index} size={size} index={index} innerItem={hexComponents[index]} />
        });
    }

    return (
        <div className="hex-grid p-10 relative z-1">
            {generateHexTiles(hexCount, hexSize)}
        </div>
    );
}
