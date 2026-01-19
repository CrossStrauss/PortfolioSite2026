import SideBar from "./components/sidebar";
import ThreeScene from './components/ThreeScene'
import ViewModeToggler from "./components/viewModeToggler";
export default function Home() {
  return (
    <div className="z-5 relative w-full h-full justify-center items-center grid grid-cols-4">
      <ViewModeToggler />
      <SideBar/>
      <div className={"col-span-3 h-full"}>
        <ThreeScene/>
      </div>
    </div>
  );
}