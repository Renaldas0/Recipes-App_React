import NavBar from "./components/navbar";
import HeroSection from "./components/hero-section";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container main">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;