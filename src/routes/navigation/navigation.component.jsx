import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import "./navigation.styles.scss";
import { Fragment } from "react";

const Navigation = () => {
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
          <Link className="nav-link" to="/">
            <span className="nav-ident">00</span>Home
          </Link>
          <Link className="nav-link" to="/destination">
            <span className="nav-ident">01</span>Destination
          </Link>
          <Link className="nav-link" to="/crew">
            <span className="nav-ident">02</span>Crew
          </Link>
          <Link className="nav-link" to="/technology">
            <span className="nav-ident">03</span>Technology
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;