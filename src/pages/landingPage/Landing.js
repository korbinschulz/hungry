import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="landing-content-main">
        <div className="landing-section">
          <h1 className="landing-main-title">
            With Hungry you can enjoy the restaurants you love without paying
            the prices you hate!
          </h1>
          <div className="landing-main-body">
            Meet the new app designed to streamline the process <br></br>of
            redeeming restaurant rewards!
          </div>
        </div>
      </div>

      <div className="restaurant-body"></div>
    </div>
  );
}

export default Landing;
