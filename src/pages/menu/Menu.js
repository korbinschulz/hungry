import React from "react";
import "./Menu.css";
import FoodOpt from "../../components/FoodOpt/FoodOpt";

function Menu() {
  return (
    <div className="page-outer">
      <div className="menu-outer">
        <div className="page-main">
          <h1 className="page-title">Menu</h1>
          <p className="page-subtext">
            Click a restaurant to get your free meal!
          </p>
        </div>

        <div className="page-sub-content">
          <FoodOpt
            title="Qdoba"
            img="https://download.logo.wine/logo/Qdoba/Qdoba-Logo.wine.png"
            body="Free chips and queso with purchase of any entree"
          />
          <FoodOpt />
          <FoodOpt />
          <FoodOpt />
          <FoodOpt />
          <FoodOpt />
        </div>
      </div>
    </div>
  );
}

export default Menu;
