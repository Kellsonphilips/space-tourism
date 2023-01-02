import { Link } from "react-router-dom";
import { useState } from "react";
import "./destination.styles.scss";




const Destination = ({ destinationData }) => {

  const { destinations } = destinationData;
  const [travelDestination, setTravleDestination] = useState("Moon");

  const destinationNavbarHandler = event => {
    setTravleDestination(event.target.textContent);
  }
  
  const object = destinations.find((obj) => obj.name === travelDestination);
  const { id, name, description, distance, travel } = object;
  const image = require(`../../assets/destination/location/image-${name.toLocaleLowerCase()}.png`);

  return (
    <div>
      <div className="destination-container" key={id}>
        <h2 className="destination-header">
          <span className="destination-index">01</span>Pick your destination
        </h2>
        <img
          className="destination-image"
          src={image}
          alt={`img-${name.toLocaleLowerCase()}`}
        />
        <div className="destination-detail-container">
          <div className="destination-navbar">
            <Link
              className={`navLink ${travelDestination === "Moon" && "active"}`}
              to="moon"
              onClick={destinationNavbarHandler}
            >
              Moon
            </Link>
            <Link
              className={`navLink ${travelDestination === "Mars" && "active"}`}
              to="mars"
              onClick={destinationNavbarHandler}
            >
              Mars
            </Link>
            <Link
              className={`navLink ${
                travelDestination === "Europa" && "active"
              }`}
              to="europa"
              onClick={destinationNavbarHandler}
            >
              Europa
            </Link>
            <Link
              className={`navLink ${travelDestination === "Titan" && "active"}`}
              to="titan"
              onClick={destinationNavbarHandler}
            >
              Titan
            </Link>
          </div>
          <h2 className="destination">{name.toLocaleUpperCase()}</h2>
          <p className="destination-details">{description}</p>
          <div className="horizontal-line"></div>
          <div className="destination-detail">
            <div className="destination-distance">
              <p className="avg-dis">Avg Distance</p>
              <h2 className="distance">{distance}</h2>
            </div>
            <div className="destination-travel-time">
              <p className="est-time">Est. Travel Time</p>
              <h2 className="duration">{travel}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
