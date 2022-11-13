import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Whata.css";
import logo from "../../../images/quickserv_logo.png";
import { useNavigate } from "react-router-dom";

function Whata() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipcode: "75454",
    hasSubcribedToEmail: true,
    password: "",
    phoneNumber: "",
    confPW: "",
  });

  const handleLogoClick = () => {
    navigate("/");
  };

  let {
    firstName,
    lastName,
    email,
    zipcode,
    hasSubcribedToEmail,
    password,
    phoneNumber,
    confPW,
  } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    const postUrl = "http://localhost:8081/whataburger/register";
    const userData = {
      firstName,
      lastName,
      email,
      zipcode,
      hasSubcribedToEmail,
      password,
      phoneNumber,
      confPW,
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
      <h2 className="option-title">Whataburger Form</h2>
      <p className="option-sup-info">
        Fill our form and download the Whataburger app <br></br>to earn and
        claim a free Whataburger!
      </p>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-field"
              name="firstName"
              id="firstName"
              defaultValue={firstName}
              onChange={onChange}
              placeHolder="First Name"
            />
          </div>

          <div className="form-group">
            <input
              required
              type="text"
              className="form-field"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={onChange}
              placeHolder="Last Name"
            />
          </div>

          <div className="form-group">
            <input
              required
              type="email"
              className="form-field"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
              placeHolder="Email"
            />
          </div>

          <div className="form-group">
            <input
              required
              type="text"
              className="form-field"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}
              onChange={onChange}
              placeHolder="Phone Number"
            />
          </div>

          <div className="form-group">
            <input
              required
              type="text"
              className="form-field"
              name="password"
              id="password"
              value={password}
              onChange={onChange}
              placeHolder="Password"
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
