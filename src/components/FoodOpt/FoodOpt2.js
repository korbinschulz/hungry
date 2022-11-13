import React from "react";
import "./FoodOpt.css";
import { useNavigate } from "react-router-dom";
import FastfoodIcon from "@mui/icons-material/Fastfood";

function FoodOpt2({ title, body }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/menu/${title}`);
  };

  return (
    <div className="food-opt" onClick={handleClick}>
      <div className="food-opt-info">
        <FastfoodIcon className="food-logo" style={{ fontSize: 80 }} />
        <h2 className="rest-title">{title}</h2>
        <p className="rest-desc">{body}</p>
      </div>
    </div>
  );
}

export default FoodOpt2;
