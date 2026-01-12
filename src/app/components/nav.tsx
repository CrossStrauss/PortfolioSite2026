import ViewModeToggler from "./viewModeToggler";
export default function Nav() {

  return (
    <nav className={'flex justify-end py-10 px-20'}>
       <ViewModeToggler />
    </nav>
  );
}
