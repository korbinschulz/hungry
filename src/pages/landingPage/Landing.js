import React from "react";
import "./Landing.css";
import pointing from "../../images/pointinggif-removebg-preview.gif";

function Landing() {
  return (
    <div className="landing">
      <div className="landing-section-1">
        <button className="landing-signin-btn">SIGN IN</button>
        <div className="landing-content">
          <div className="landing-title-1">
            {" "}
            <h1 className="landing-title">Quicker Service on QuickServ(tm)</h1>
          </div>
          <p className="landing-about-1">
            Quickserv is a web app designed to make your life easier. By
            streamlining the process of signing up and redeeming restaurant
            loyalty rewards for different fast food brands, it connects you to
            bargains that you would otherwise have to spend hours searching for
            through mobile apps on your own time.<br></br> With the touch of a
            button, you can create hundreds of rewards accounts with hundreds of
            different restaurants. What are you waiting for?
          </p>
          <div className="landing-btn-section">
            <button id="button-1" className="landing-main-btn">
              SIGN UP
            </button>
            <button className="landing-main-btn">
              Download<br></br>The App
            </button>
          </div>

          <img src={pointing} alt="Pointing Gif" />
        </div>
      </div>

      <div className="landing-section-2">
        <div className="land-title-2">
          <h1 className="landing-title">Fast-Food Families</h1>
        </div>
        <p className="landing-about">
          Did you know that 83% of American families eat at a fast food
          restaurant at least once a week?
          <br></br>
          The average household spends 10% of their yearly earnings on fast
          food.
        </p>

        <p className="landing-about">
          If the average income is $71,186, that's $7,119 spent on fast food
          alone annually!
        </p>

        <p className="landing-about-2-2">
          If you could earn rewards every time you went out for food, imagine
          how much you'd save.<br></br>Quickserv makes it easier to save money
          while not cutting down the amount of times you eat out.
        </p>

        <p className="landing-about-2-3">
          Save money without having to cut back on food.<br></br>Travel-
          explore- experience.
        </p>
      </div>

      <div className="landing-section-3">
        <div className="land-title-3">
          <h1 className="landing-title">Our Mission</h1>
        </div>
        <div className="landing-about-3">
          <p className="landing-about-3-1">
            (Research on homelessness and hunger here to show that we did our
            research and are passionate about a social cause cuz thats what
            statefarm loves to see)
          </p>
          <br></br>
          <p className="landing-about-3-2">
            60% of our ad revenue goes to homeless shelters.<br></br>Help feed
            the homeless while you help feed yourself.
          </p>
        </div>
      </div>

      <div className="landing-section-4">
        <h1 className="landing-title">Our Partners</h1>
      </div>
    </div>
  );
}

export default Landing;
