import NavButton from "./NavButton";

export default function Nav() {
  return (
    <nav className="w-full flex justify-evenly items-end py-10 h-36">
      <NavButton text="About" />
      <NavButton text="Skills" />
      <NavButton text="Projects" />
    </nav>
  );
}
