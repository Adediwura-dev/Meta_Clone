import { Handbag, Menu, Search, UserRound } from "lucide-react";
import { FaMeta } from "react-icons/fa6";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
    const [toggle, setToggle] = useState(false)

    const toggleSwitch = () => {
      setToggle(!toggle)
    }

  return (
    <div>
      <header className="flex justify-between px-44 py-8 max-md:px-14">
        <section className="flex gap-10">
          <main className="flex  items-center">
            <div className="flex text-blue-500">
              <FaMeta />
            </div>
            <nav>Meta</nav>
          </main>
          <main className="flex justify-between items-center gap-7 max-md:hidden">
            <nav>AI glasses</nav>
            <nav>Meta Quest</nav>
            <nav>Apps and games</nav>
          </main>
        </section>

        <section className="flex justify-between items-center gap-7 max-md:hidden">
          <nav>Explore meta</nav>
          <nav>Support</nav>
          <main className="flex gap-5">
            <div>
              <Search />
            </div>
            <div>
              <Handbag />
            </div>
            <div>
              <UserRound />
            </div>
          </main>
        </section>

        <section onClick={toggleSwitch} className=" items-center hidden max-md:block cursor-pointer">
        
          <Menu/>
        </section>
      </header>
      {toggle ? <Sidebar toggle={toggle} /> : null}
    </div>
  );
};

export default Header;
