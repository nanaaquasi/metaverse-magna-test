import React from "react";
import NavHeader from "../../components/shared/NavHeader";

import "./Welcome.scss";
import ImageBev from "../../assets/images/welcome.png";
import bevAnimation from "../../assets/images/welcome-animation.gif";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <NavHeader />
      <div className="flex welcome-page__wrapper">
        <div className="main-content text-center">
          <div className="main-content__image">
            <img src={ImageBev} alt="welcome" />
            <div className="animation-overlay">
              <img src={bevAnimation} alt="welcome" />
            </div>
          </div>

          <div className="main-content__heading">
            <h1>Welcome to Breach 🥳</h1>
          </div>
          <div className="main-content__description">
            <p>
              Just a few quick questions to help personalise your Breach
              experience. Are you ready?
            </p>
          </div>

          <div className="main-content__cta cursor-pointer">
            <button className="button button--tertiary cursor-pointer">
              <Link to={"/interests"}>Let's begin!</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
