import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
