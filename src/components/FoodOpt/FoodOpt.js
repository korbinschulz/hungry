import React from "react";
import "./FoodOpt.css";
import { useNavigate } from "react-router-dom";

function FoodOpt({ title, img, body }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/menu/${title}`);
  };

  return (
    <div className="food-opt" onClick={handleClick}>
      <div className="food-opt-info">
        <img className="img-logo" src={img} alt={title} />
        <div className="image-logo"></div>
        <h2 className="rest-title">{title}</h2>
        <p className="rest-desc">{body}</p>
      </div>
    </div>
  );
}

export default FoodOpt;
