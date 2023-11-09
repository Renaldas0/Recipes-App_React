import NavBar from "./components/navbar";
import HeroSection from "./components/hero-section";
import ImproveSkills from "./components/improveSkills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
      </div>
    </div>
  );
}

export default App;