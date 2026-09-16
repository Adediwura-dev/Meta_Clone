import { Handbag, UserRound } from "lucide-react";

const Header = () => {
  return (
    <div>
      <section>
        <main>
          <img src="" alt="meta logo" />
        </main>
        <main>
          <nav>About</nav>
          <nav>AI glasses</nav>
          <nav>Meta Quest</nav>
          <nav>Apps and games</nav>
          <nav>Learn more</nav>
          <nav>Apps and games</nav>
          <nav>Apps and games</nav>
        </main>
      </section>

      <section>
        <nav>Explore meta</nav>
        <nav>Support</nav>
        <main>
            <div>
                <Handbag />
            </div>
          <div>
            <UserRound />
          </div>
        </main>
      </section>
    </div>
  );
};

export default Header;
