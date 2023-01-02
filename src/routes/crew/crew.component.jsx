import { Link } from "react-router-dom";
import { useState } from "react";
import "./crew.styles.scss";



const Crew = ({ crewData }) => {
  
  const { crew } = crewData;
  const [currentCrew, setCurrentCrew] = useState(5)

  const handleCrewMemberChange = ((event) => {
    const crewId = Number(event.target.name);
    setCurrentCrew(crewId);
  })

  const crewObject = crew.find((obj) => obj.id === currentCrew);
  const { id, name, role, bio } = crewObject;
  const images = require(`../../assets/crew/crew-members/image-${name
    .toLowerCase()
    .replace(" ", "-")}.png`);

  return (
    <div>
      <div className="crew-container" key={id}>
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
            <Link
              className={`crew-navs ${currentCrew === 5 && "active"}`}
              to="commander"
              name="5"
              onClick={handleCrewMemberChange}
            ></Link>
            <Link
              className={`crew-navs ${currentCrew === 6 && "active"}`}
              to="mission-specialist"
              name="6"
              onClick={handleCrewMemberChange}
            ></Link>
            <Link
              className={`crew-navs ${currentCrew === 7 && "active"}`}
              to="pilot"
              name="7"
              onClick={handleCrewMemberChange}
            ></Link>
            <Link
              className={`crew-navs ${currentCrew === 8 && "active"}`}
              to="flight-engineer"
              name="8"
              onClick={handleCrewMemberChange}
            ></Link>
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
    </div>
  );
};

export default Crew;
