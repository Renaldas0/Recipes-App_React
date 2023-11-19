import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import NavBar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";

import Recipes from "./pages/recipes";
import Settings from "./pages/settings";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;