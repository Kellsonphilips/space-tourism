import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import { ReactComponent as Hanburger } from "../../assets/shared/icon-hamburger.svg";
import { ReactComponent as CloseHamburger} from "../../assets/shared/icon-close.svg";
import { Fragment, useEffect, useState } from "react";
import NavBar from "../../components/nav-component/navbar.component";
import "./navigation.styles.scss";


const Navigation = () => {

  const [navText, setNavText] = useState("00Home");
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const handleNavClick = (event) => {
    const nav = event.target.textContent;
    setNavText(nav)
  }

  const toggleHamburgerNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen)
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  },[])


  return (
    <Fragment>
      <div className="navigation-container" to="/">
        <Link to={"/"} className="logo">
          <Logo />
        </Link>
        <div className="hor-line"></div>
        {screenWidth > 767 && (
          <NavBar handleNavClick={handleNavClick} navText={navText} />
        )}
        <div className="hamburger-menu " onClick={toggleHamburgerNavBar}>
          {isNavBarOpen ? (
            <Fragment>
              <CloseHamburger className="icon" />
              {screenWidth < 767 && (
                <NavBar handleNavClick={handleNavClick} navText={navText} />
              )}
            </Fragment>
          ) : (
            <Hanburger className="icon" />
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
