import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [Icon, setIcon] = useState(<FaBars />);
  const toggleSideNav = () => {
    const sideNav = document.getElementById("side-nav");
    if (sideNav) {
      if (sideNav.classList.contains("left-0")) {
        sideNav.classList.remove("left-0");
        sideNav.classList.add("left-[-275px]");
        setIcon(<FaBars />)
    } else {
        sideNav.classList.remove("left-[-275px]");
        sideNav.classList.add("left-0");
        setIcon(<FaTimes />)
      }
    }
  };
  return (
    <header className="select-none bg-primary p-3 text-white flex items-center justify-between">
      <div
        className="border border-white p-2 cursor-pointer hover:bg-light rounded-full"
        onClick={toggleSideNav}
        id="bars"
      >
        {Icon}
      </div>
      <img
        src="/images/logo-f.png"
        alt="Logo"
        className="w-full max-w-[36px]"
      />
    </header>
  );
};
