import NavBar from "./components/navbar";
import HeroSection from "./components/hero-section";
import ImproveSkills from "./components/improveSkills";
import QuoteSection from "./components/quoteSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <QuoteSection />
      </div>
    </div>
  );
}

export default App;