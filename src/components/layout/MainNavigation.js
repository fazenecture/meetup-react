import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>React Header</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">New Meetup</Link>
          </li>{" "}
          <li>
            <Link to="/favourites">Favourite</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
