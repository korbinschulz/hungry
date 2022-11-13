import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Whata.css";
import { useNavigate } from "react-router-dom";
import logo from "../../../images/quickserv_logo.png";

function Buffalo() {
  const navigate = useNavigate();
  const generatedNum = Math.floor(Math.random() * 9000000000) + 1000000000;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    given_name: "",
    family_name: "",
    user_metadata: {
      birthDate: "12/12/2002",
      zipCode: "75454",
      phone: `${generatedNum}`,
      termsLink: "https://www.buffalowildwings.com/terms-of-use",
      termsAcceptedAt: "2022-11-13T03:59:35.821Z",
      marketingOptIn: "on",
    },
  });

  const handleLogoClick = () => {
    navigate("/");
  };

  let {
    email,
    password,
    given_name,
    family_name,
    birthDate,
    zipCode,
    phone,
    user_metadata,
    termsLink,
    termsAcceptedAt,
    marketingOptIn,
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
    const postUrl = "http://localhost:8081/buffalo/register";
    const userData = {
      email,
      password,
      given_name,
      family_name,
      birthDate,
      zipCode,
      phone,
      user_metadata,
      termsLink,
      termsAcceptedAt,
      marketingOptIn,
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
      <h2 className="option-title">Buffalo Wild Wings Form</h2>
      <p className="option-sup-info">
        Click and fill our form to earn <br></br>free wings on the first of next
        month (6 pieces)!
      </p>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-field"
              name="fn"
              id="given_name"
              defaultValue={given_name}
              onChange={onChange}
              placeHolder="First Name"
            />
          </div>

          <div className="form-group">
            <input
              required
              type="text"
              className="form-field"
              name="family_name"
              id="family_name"
              value={family_name}
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
              name="password"
              id="password"
              value={password}
              onChange={onChange}
              placeHolder="Password"
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
            <button type="submit" className="form-submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Buffalo;
