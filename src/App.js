import Home from "./components/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Destination from "./components/destination/destination.component";
import Crew from "./components/crew/crew.component";
import DATA from "./data.json"
import Technology from "./components/technology/technology.component";
import "./App.scss";

const allData = DATA; 

function App() {

  
  return (
    <div >
      <Navigation />
      <Home path={"/"}/>
      <Destination destinationData={allData} />
      <Crew  crewData={allData} />
      <Technology techData={allData}/>
    </div>
  );
}

export default App;
