import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../images/quickserv_logo.png";
import "./Whata.css";

function Dennys() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  });

  let { first_name, last_name, email, phone, password } = formData;

  const handleLogoClick = () => {
    navigate("/");
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    const postUrl = "http://localhost:8081/dennys/register";
    const userData = {
      first_name,
      last_name,
      email,
      phone,
      password,
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
      <h2 className="option-title">Denny's Form</h2>
      <p className="option-sup-info">
        Fill the form and click submit to receive a free <br></br>Denny's Grand
        Slam!
      </p>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-field"
              name="first_name"
              id="first_name"
              defaultValue={first_name}
              onChange={onChange}
              placeHolder="First Name"
            />
          </div>

          <div className="form-group">
            <input
              required
              type="text"
              className="form-field"
              name="last_name"
              id="last_name"
              value={last_name}
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
              name="phone"
              id="phone"
              value={phone}
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

export default Dennys;
