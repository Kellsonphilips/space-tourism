import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import { Fragment, useState } from "react";
import "./navigation.styles.scss";


const Navigation = () => {

  const [navText, setNavText] = useState("00Home");

  const handleNavClick = (event) => {
    const nav = event.target.textContent;
    setNavText(nav)
  }

  return (
    <Fragment>
      <div className="navigation-container" to="/">
        <Link to={"/"} className="logo">
          <div>
            <Logo />
          </div>
        </Link>
        <div className="hor-line"></div>
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
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;