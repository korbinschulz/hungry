import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../images/quickserv_logo.png";
import "./Whata.css";

function Whata() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fn: "",
    ln: "",
    em: "",
    emcon: "",
    bmon: "9",
    bday: "10",
    zip: "75454",
    theaction: "regulars-club-two",
  });

  const handleLogoClick = () => {
    navigate("/");
  };

  let { fn, ln, em, emcon, bmon, bday, zip, theaction } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    const postUrl = "http://localhost:8081/wafflehouse/register";
    const userData = {
      fn,
      ln,
      em,
      emcon,
      bmon,
      zip,
      bday,
      theaction,
    };

    axios
      .post(postUrl, userData)
      .then(function (response) {
        console.log(response.data);
        alert("Successfully created account!");
      })
      .catch(function (error) {
        console.log(error);
        alert("Error, no account created!");
      });
  };

  return (
    <div className="form-outer">
      <img
        src={logo}
        onClick={handleLogoClick}
        className="serv-logo"
        alt="Quickserv Logo"
      />
      <h2 className="option-title">Wafflehouse Form</h2>
      <p className="option-sup-info">
        Fill the form and click submit to receive a free <br></br>side of
        smothered hashbrowns!
      </p>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-field"
              name="fn"
              id="fn"
              defaultValue={fn}
              onChange={onChange}
              placeHolder="First Name"
            />
          </div>

          <div className="form-group">
            <input
              required
              type="text"
              className="form-field"
              name="ln"
              id="ln"
              value={ln}
              onChange={onChange}
              placeHolder="Last Name"
            />
          </div>

          <div className="form-group">
            <input
              required
              type="email"
              className="form-field"
              name="em"
              id="em"
              value={em}
              onChange={onChange}
              placeHolder="Email"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="form-submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Whata;
