import React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import pointing from "../../images/pointinggif-removebg-preview.gif";
import sitting from "../../images/cellphonegirl.gif";
import homeless from "../../images/hoeless-removebg-preview.png";

function Landing() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <div className="landing">
      <div className="landing-section-1">
        <button onClick={handleClick} className="landing-signin-btn">
          SIGN IN
        </button>
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
            <button
              onClick={handleClick}
              id="button-1"
              className="landing-main-btn"
            >
              SIGN UP
            </button>
            <button className="landing-main-btn">
              Download<br></br>The App
            </button>
          </div>

          <img src={pointing} className="pointing-gif" alt="Pointing Gif" />
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
        <img src={sitting} className="sitting-gif" alt="Sitting Gif" />
      </div>

      <div className="landing-section-3">
        <div className="land-title-3">
          <h1 className="landing-title">Our Mission</h1>
        </div>
        <div className="landing-about-3">
          <p className="landing-about-3-1">
            In todays America, homelessness is an epidemic, especially among the
            urban poor. One out of every 50 people are homeless. Thanks to our
            partners United Mission Relief and Hearts for the Homeless, were
            able to support food banks in the Dallas-Fort Worth area by donating
            leftovers and canned goods.
          </p>
          <br></br>
          <p className="landing-about-3-2">
            60% of our ad revenue goes to homeless shelters.<br></br>Help feed
            the homeless while you help feed yourself.
          </p>
        </div>
        <img src={homeless} className="homeless-gif" alt="Helping Gif" />
      </div>

      <div className="landing-section-4"></div>
    </div>
  );
}

export default Landing;
