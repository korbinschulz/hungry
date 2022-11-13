import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landingPage/Landing";
import Menu from "./pages/menu/Menu";
import Nav from "./components/Nav/Nav";
import Whata from "./components/OptPage/Whata/Whata";
import Waffle from "./components/OptPage/Whata/Waffle";
import Buffalo from "./components/OptPage/Whata/Buffalo";
import Dennys from "./components/OptPage/Whata/Dennys";
import SignUp from "./components/OptPage/Whata/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/Whataburger" element={<Whata />} />
          <Route path="/menu/Wafflehouse" element={<Waffle />} />
          <Route path="/menu/Buffalo-Wild-Wings" element={<Buffalo />} />
          <Route path="/menu/Dennys" element={<Dennys />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
