
export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="z-5 relative w-full h-full justify-center items-center grid grid-cols-4">
      
      <div className={"col-span-3 h-full"}>
        
      </div>
    </div>
  );
}