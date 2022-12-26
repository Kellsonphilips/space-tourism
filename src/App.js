import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Destination from "./components/destination/destination.component";
import Crew from "./components/crew/crew.component";
import DATA from "./data.json"
import Technology from "./components/technology/technology.component";

const allData = DATA; 

function App() {

  
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path="destination/*"
          element={<Destination destinationData={allData} />}
        />
        <Route path="crew/*" element={<Crew crewData={allData} />} />
        <Route path="technology/*" element={<Technology techData={allData} />} />
      </Route>
    </Routes>
  );
}

export default App;
