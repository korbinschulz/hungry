import "./Nav.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

function Nav() {
  return (
    <div className="nav">
      <div className="nav-options">
        <div className="nav-opt-section">
          <div className="logo-div">
            <img src={logo} className="land-logo" alt="Logo" />
            <h1 className="logo-title">Hungry</h1>
          </div>
          <div className="landing-left-nav"></div>
          <div className="landing-left-nav">
            <div className="nav-option">Home</div>
            <div className="nav-option">Menu</div>
            <div className="nav-option">FAQ</div>
          </div>
        </div>
        <div className="land-nav-btns">
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
