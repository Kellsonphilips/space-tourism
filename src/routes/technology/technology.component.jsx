import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./technology.styles.scss";



const Technology = ({ techData }) => {
  
  const { technology } = techData;
  const [useTechnology, setUseTechnology] = useState(9)
  const [screenWidth, setScreenWidth] = useState(0);

  const handleTechnologyRoute = ((event) => {
    const routeId = Number(event.target.name);
    setUseTechnology(routeId);
  })

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  const object = technology.find((obj) => obj.id === useTechnology);
  const { id, name, description } = object;
  const imagePortrait = require(`../../assets/technology/technology-portrait/image-${name
    .toLowerCase()
    .replace(" ", "-")}-portrait.jpg`);
  const imageLandscape = require(`../../assets/technology/technology-landscape/image-${name
    .toLowerCase()
    .replace(" ", "-")}-landscape.jpg`);

  return (
    <div className="technology-container" key={id}>
      <div className="technology-all-info-container">
        <h2 className="technology-header">
          <span className="tech-index">03</span>Space Launch 101
        </h2>
        <div className="technology-details-container">
          <div className="technology-route-container">
            <Link
              className={`route-indexes ${useTechnology === 9 && "active"}`}
              to="launch-vehicle"
              name="9"
              onClick={handleTechnologyRoute}
            >
              1
            </Link>
            <Link
              className={`route-indexes ${useTechnology === 10 && "active"}`}
              to="spaceport"
              name="10"
              onClick={handleTechnologyRoute}
            >
              2
            </Link>
            <Link
              className={`route-indexes ${useTechnology === 11 && "active"}`}
              to="space-capsule"
              name="11"
              onClick={handleTechnologyRoute}
            >
              3
            </Link>
          </div>
          <div className="technology-details">
            <h2 className="technology-detail-header">The Technology</h2>
            <h1 className="technology-name">{name}</h1>
            <p className="technology-description">{description}</p>
          </div>
        </div>
      </div>
      <div className="technology-image-container">
        {screenWidth > 767 ? (
          <img
            className="image"
            src={imagePortrait}
            alt={`img-${name.toLowerCase().replace(" ", "-")}`}
          />
        ) : (
          <img
            className="image"
            src={imageLandscape}
            alt={`img-${name.toLowerCase().replace(" ", "-")}`}
          />
        )}
      </div>
    </div>
  );
};

export default Technology;
 