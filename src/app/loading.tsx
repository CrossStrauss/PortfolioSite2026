export default function Loading() {
  return <div className="fixed top-0 right-0 w-full h-screen flex items-center justify-center bg-secondary-custom z-3">
    <div className="relative flex justify-center items-center size-[200px]">


      <div className="overflow-hidden absolute size-25 rounded-full bg-accent-custom flex justify-center items-center border border-secondary-custom animate-rotateOuter">
        <div className="w-[90%] h-[90%] rounded-full bg-secondary-custom">
        </div>
        <div className="w-[60%] rounded-r-full h-full absolute bg-secondary-custom translate-x-[50%]">
        </div>
      </div>


      <div className="overflow-hidden absolute size-20 rounded-full bg-accent-custom flex justify-center items-center border-2 border-secondary-custom animate-rotateMiddle">
        <div className="w-[90%] h-[90%] rounded-full bg-secondary-custom">
        </div>
        <div className="w-[60%] rounded-r-full h-full absolute bg-secondary-custom translate-x-[50%]">
        </div>
      </div>

      <div className="overflow-hidden absolute size-15 rounded-full bg-accent-custom flex justify-center items-center border-3 border-secondary-custom animate-rotateInner">
        <div className="w-[90%] h-[90%] rounded-full bg-secondary-custom">
        </div>
        <div className="w-[60%] rounded-r-full h-full absolute bg-secondary-custom translate-x-[50%]">
        </div>
      </div>

    </div>
  </div>
}