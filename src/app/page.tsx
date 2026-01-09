import SideBar from "./components/sidebar";

export default function Home() {
  return (
    <div className="z-5 relative w-full h-full justify-center items-center grid grid-cols-4">
        <SideBar />
    </div>
  );
}