import React, { useEffect, useState } from "react";
import ArrowIcon from "../../assets/icons/ArrowIcon";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`floating-button ${isVisible ? "visible" : "hidden"}`}
      onClick={scrollToTop}
    >
      <ArrowIcon />
    </button>
  );
};

export default FloatingButton;
