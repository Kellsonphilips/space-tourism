import "./home.styles.scss"

const Home = () => {
    
  return (
    <div className="home-container">
      <div className="home-text-container">
        <h2 className="home-title">So, you want to travel to</h2>
        <span className="space">Space</span>
        <p className="welcome-message">
          Let’s face it; if you want to go to
          space, you might as well genuinely go to outer space and not hover
          kind of on the edge of it. Well sit back, and relax because we’ll give
          you a truly out of this world experience!
        </p>
      </div>
      <div className="explore-container" to="destination">
        Explore
      </div>
    </div>
  );
};

export default Home;
