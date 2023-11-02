import React from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const NavHeader = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <span className="cursor-pointer" onClick={() => goToHome()}>
        <Logo />
      </span>
    </div>
  );
};

export default NavHeader;
