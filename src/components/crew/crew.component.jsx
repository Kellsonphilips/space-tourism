import background from "../../assets/crew/background-crew-desktop.jpg"
import "./crew.styles.scss";


const Crew = ({ crewData }) => {
  
  const crews = crewData.crew;

  return (
    <div>
      {crews
        .filter((_, index) => index < 1)
        .map((crew) => {
          const { id, name, role, bio } = crew;
          const images = require(`../../assets/crew/crew-members/image-${name
            .toLowerCase()
            .replace(" ", "-")}.png`);
          return (
            <div
              className="crew-container"
              style={{ backgroundImage: `url(${background})` }}
              key={id}
            >
              <div className="crew-info-container">
                <h2 className="crew-header">
                  <span className="crew-index">02</span>Meet Your Crew
                </h2>

                <div className="crew-details-container">
                  <h2 className="crew-role">{role}</h2>
                  <h1 className="crew-name">{name}</h1>
                  <p className="crew-details">{bio}</p>
                </div>
                <div className="crew-navigation">
                  <div className="crew-navs"></div>
                  <div className="crew-navs"></div>
                  <div className="crew-navs"></div>
                  <div className="crew-navs"></div>
                </div>
              </div>
              <div className="crew-image-container">
                <img
                  className="image"
                  src={images}
                  alt={`img-${name.toLowerCase().replace(" ", "-")}`}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Crew;
