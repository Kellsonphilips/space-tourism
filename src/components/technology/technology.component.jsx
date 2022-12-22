import background from "../../assets/technology/background-technology-desktop.jpg";
import "./technology.styles.scss";


const Technology = ({ techData }) => {
  
  const technologies = techData.technology;

  return (
    <div>
      {technologies
        .filter((_, index) => index < 1)
        .map((technology) => {
          const { id, name, description } = technology;
          const images = require(`../../assets/technology/technology-portrait/image-${name
            .toLowerCase()
            .replace(" ", "-")}-portrait.jpg`);
          return (
            <div
              className="technology-container"
              style={{ backgroundImage: `url(${background})` }}
              key={id}
            >
              <div className="technology-all-info-container">
                <h2 className="technology-header">
                  <span className="tech-index">03</span>Space Launch 101
                </h2>
                <div className="technology-details-container">
                  <div className="technology-route-container">
                    <div className="route-indexes">1</div>
                    <div className="route-indexes">2</div>
                    <div className="route-indexes">3</div>
                  </div>
                  <div className="technology-details">
                    <h2 className="technology-detail-header">The Technology</h2>
                    <h1 className="technology-name">{name}</h1>
                    <p className="technology-description">{description}</p>
                  </div>
                </div>
              </div>
              <div className="technology-image-container">
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

export default Technology;