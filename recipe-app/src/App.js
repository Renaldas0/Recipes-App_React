import NavBar from "./components/navbar";
import HeroSection from "./components/hero-section";
import ImproveSkills from "./components/improveSkills";
import QuoteSection from "./components/quoteSection";
import ChefsSection from "./components/chefsSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <QuoteSection />
        <ChefsSection />
      </div>
    </div>
  );
}

export default App;