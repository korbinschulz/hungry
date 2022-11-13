import React from "react";
import "./Menu.css";
import FoodOpt from "../../components/FoodOpt/FoodOpt";
import FoodOpt2 from "../../components/FoodOpt/FoodOpt2";

function Menu() {
  return (
    <div className="page-outer">
      <div className="menu-outer">
        <div className="page-main">
          <h1 className="page-title">Menu</h1>
          <p className="page-subtext">
            Click any restaurant you want and follow the instructions to get
            free/discounted food!
          </p>
        </div>

        <div className="page-sub-content">
          <FoodOpt2
            title="Whataburger"
            body="Click and fill our form to receive a free Whataburger voucher!"
          />

          <FoodOpt2
            title="Wafflehouse"
            body="Fill the form and click submit to receive a free side of
            smothered hashbrowns!"
          />

          <FoodOpt2
            title="Dennys"
            body="Click and fill our form to receive a free Denny's Grand Slam!"
          />

          <FoodOpt2
            title="Buffalo-Wild-Wings"
            body="Click and fill our form to earn free wings on the first of next month (6 pieces)!"
          />

          <FoodOpt
            title="Qdoba"
            url="https://order.qdoba.com/account/signup"
            body="Fill the form to receive a free serving of chips and queso!"
          />

          <FoodOpt
            title="Chili's"
            url="https://www.chilis.com/register"
            body="Fill the form to receive a free serving of chips and salsa!"
          />

          <FoodOpt
            title="Krispy Kreme"
            url="https://www.krispykreme.com/account/create-account"
            body="Fill the form to receive a free donut + another free dozen a week later!"
          />

          <FoodOpt
            title="Del Taco"
            url="https://www.deltaco.com/delyeahrewards"
            body="Fill the form to receive two free tacos!"
          />

          <FoodOpt
            title="Taco Bueno"
            url="https://www.tacobueno.com/loyalty"
            body="Fill the form to receive a free taco!"
          />

          <FoodOpt
            title="Baskin Robbins"
            url="https://www.baskinrobbins.com/en/sign-up/email"
            body="Fill the form to receive BOGO ice cream!"
          />

          <FoodOpt
            title="7 Eleven"
            url="https://www.7-eleven.com/register"
            body="Fill the form to receive a free energy drink!"
          />

          <FoodOpt
            title="7 Eleven"
            url="https://www.7-eleven.com/register"
            body="Fill the form to receive a free energy drink!"
          />

          <FoodOpt
            title="Benihana"
            url="https://www.benihana.com/promotions/chefs-table-profile-registration/"
            body="Fill the form to receive $30 off on your birthday!"
          />

          <FoodOpt
            title="Bruegger's Bagel"
            url="https://rewards.brueggers.com/join"
            body="Fill the form to receive a free bagel!"
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
