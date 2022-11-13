import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../images/quickserv_logo_red.png";
import "./Whata.css";

function Dennys() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  let { username, email, password } = formData;

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleSubmitClick = () => {
    alert("Successfully created account!");
    navigate("/menu");
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
      username,
      email,
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
    <div className="form-outer-signup">
      <img
        src={logo}
        onClick={handleLogoClick}
        className="serv-logo"
        alt="Quickserv Logo"
      />
      <h2 className="option-title-1">Sign Up Form</h2>
      <p className="option-sup-info-1">
        Fill out the form below to create your Quickserv account!
      </p>
      <div className="form">
        <form onSubmit={handleSubmit}>
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
              name="username"
              id="username"
              defaultValue={username}
              onChange={onChange}
              placeHolder="Username"
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
            <button
              type="submit"
              onClick={handleSubmitClick}
              className="form-submit-btn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Dennys;
