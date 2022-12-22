import background from "../../assets/destination/background-destination-desktop.jpg";
import "./destination.styles.scss";



const Destination = ({ destinationData }) => {
  const destinations = destinationData.destinations;

  return (
    <div>
      {destinations
        .filter((_, index) => index < 1)
        .map((object) => {
          const { id, name, description, distance, travel } = object;
          const image = require(`../../assets/destination/location/image-${name.toLocaleLowerCase()}.png`);
          return (
            <div
              className="destination-container"
              style={{ backgroundImage: `url(${background})` }}
              key={id}
            >
              <h2 className="destination-header">
                <span className="destination-index">01</span>Pick your
                destination
              </h2>
              <img
                className="destination-image"
                src={image}
                alt={`img-${name.toLocaleLowerCase()}`}
                width="420"
                height="420"
              />
              <div className="destination-detail-container">
                <div className="destination-navbar">
                  <span className="nav-link">Moon</span>
                  <span className="nav-link">Mars</span>
                  <span className="nav-link">Europa</span>
                  <span className="nav-link">Titan</span>
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
          );
        })}
    </div>
  );
};

export default Destination;
