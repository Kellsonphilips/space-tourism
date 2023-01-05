import { Link } from "react-router-dom";
import "./navbar.styles.scss";

const NavBar = ({ navText, handleNavClick }) => {
  return (
    <div className="navlinks">
      <Link
        className={`nav-link ${navText === "00Home" && "active"}`}
        to="/"
        onClick={handleNavClick}
      >
        <span className="nav-ident">00</span>Home
      </Link>
      <Link
        className={`nav-link ${navText === "01Destination" && "active"}`}
        to="/destination"
        onClick={handleNavClick}
      >
        <span className="nav-ident">01</span>Destination
      </Link>
      <Link
        className={`nav-link ${navText === "02Crew" && "active"}`}
        to="/crew"
        onClick={handleNavClick}
      >
        <span className="nav-ident">02</span>Crew
      </Link>
      <Link
        className={`nav-link ${navText === "03Technology" && "active"}`}
        to="/technology"
        onClick={handleNavClick}
      >
        <span className="nav-ident">03</span>Technology
      </Link>
    </div>
  );
};

export default NavBar;
