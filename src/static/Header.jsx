import { Handbag, Menu, UserRound } from "lucide-react";
import { useState } from "react";
import { FaMeta } from "react-icons/fa6";

import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleSwitch = () => {
    setToggle(!toggle);
  };

  console.log(toggle);
  return (
    <>
      <header className=" fixed top-0 left-0 w-full z-50 bg-white flex h-20 px-48 max-md:px-16 justify-between items-center font-medium">
        <section className=" flex gap-12 items-center">
          <Link to="/">
            {" "}
            {/* <main className=" cursor-pointer">
              <img className=" w-20" src="logooo.svg" alt="metalogo" />
            </main> */}
            {/* <div className="flex cursor-pointer text-blue-500">
              <FaMeta />
            </div> */}
            <main className="flex  items-center">
              <div className="flex text-blue-500">
                <FaMeta />
              </div>
              <nav>Meta</nav>
            </main>
          </Link>
          <main className=" flex gap-8 max-md:hidden">
            <Link to="/about">
              <nav className=" cursor-pointer">About</nav>
            </Link>
            <nav className=" cursor-pointer">AI glasses</nav>
            <nav className=" cursor-pointer">Meta Quest</nav>
            <nav className=" cursor-pointer">Apps and games</nav>
          </main>
        </section>
        <section className=" flex gap-8 max-md:hidden">
          <nav className=" cursor-pointer">Explore Meta</nav>
          <nav className=" cursor-pointer">Support</nav>
          <main className=" flex gap-6 items-center">
            <div className=" cursor-pointer">
              <Handbag />
            </div>
            <div className=" cursor-pointer">
              <UserRound />
            </div>
          </main>
        </section>

        <section
          onClick={toggleSwitch}
          className=" hidden max-md:block cursor-pointer"
        >
          <Menu />
        </section>
      </header>
      {toggle ? <Sidebar toggle={toggle} /> : null}
    </>
  );
};

export default Header;
