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

          <div className="main-content__message-bubble">
            <p>Hi! I'm Bev. I'm here to help you get the best out of Breach.</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="21"
              viewBox="0 0 17 21"
              fill="none"
            >
              <path
                d="M16.8876 20.1846C11.6876 20.9846 6.55425 18.1212 4.88758 16.2879C6.60545 12.1914 -4.00033 2.24186 2.99967 2.24148C4.61828 2.24148 6.00073 -1.9986 11.8876 1.1846C11.9088 2.47144 11.8876 6.92582 11.8876 7.6842C11.8876 18.1842 17.8876 19.5813 16.8876 20.1846Z"
                fill="#A940FF"
              />
            </svg>
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
