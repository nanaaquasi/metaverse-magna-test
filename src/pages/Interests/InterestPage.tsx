import React, { useEffect } from "react";
import NavHeader from "../../components/shared/NavHeader";

import "./Interest.scss";
import bevIcon from "../../assets/images/bev-icon.png";
import CategoryCard from "../../components/shared/CategoryCard";
import {
  fetchAllCategories,
  saveUserInterests,
} from "../../services/data.service";
import CategoryCardShimmer from "../../components/loaders/CategoryCardShimmer";
import jwtService from "../../services/jwt.service";
import { useNavigate } from "react-router-dom";
import { Category } from "../../utils/types";

const InterestPage = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = React.useState<Category[]>(
    []
  );

  const [allCategories, setAllCategories] = React.useState<Category[]>([]);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const userId = jwtService.getItem("userId");

  const selectInterest = (interest: Category) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item.id !== interest.id)
      );
      return;
    }

    setSelectedInterests([...selectedInterests, interest]);
  };

  const onSumitUserInterests = async () => {
    if (selectedInterests.length === 0) {
      alert("Please select at least one interest.");
      return;
    }

    setIsSubmitting(true);
    try {
      const requestBody = {
        interests: selectedInterests.map((item) => item.id),
      };

      const response = await saveUserInterests(requestBody, userId);

      if (response.status === 201) {
        setIsSubmitting(false);
        navigate("/dashboard");
      }
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      setIsFetching(true);
      try {
        const response = await fetchAllCategories();
        setAllCategories(response.data);
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
      }
    };

    fetchCategories();
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="interests-page">
      <NavHeader />
      <div className="flex interests-page__wrapper">
        <div onClick={() => goBack()} className="cursor-pointer nav-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="nav-button__icon"
          >
            <path
              d="M10 4L6 8L10 12"
              stroke="#181818"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <a>Back</a>
        </div>
        <div className="main-content text-center">
          <div className="main-content__header text-center">
            <div className="main-content__header--image">
              <img src={bevIcon} alt="bev" />
            </div>
            <div className="main-content__header--title">
              <h1>What are your interests?</h1>
            </div>

            <div className="main-content__header--description">
              <p>
                Select your interests and I'll recommend some series I'm certain
                you'll enjoy!
              </p>
            </div>
          </div>

          <div className="main-content__body">
            <div className="main-content__body--interests">
              <ul className="main-content__body--interests-list">
                {isFetching
                  ? // loading 10 category shimmer using Array.from
                    Array.from({ length: 20 }).map((_, index) => (
                      <CategoryCardShimmer key={index} />
                    ))
                  : allCategories.map((category, index) => (
                      <CategoryCard
                        category={category}
                        key={index}
                        onSelectCategory={selectInterest}
                        selectedCategories={selectedInterests}
                      />
                    ))}
              </ul>
            </div>
          </div>

          <div className="main-content__cta cursor-pointer">
            <button
              className="button button--tertiary cursor-pointer"
              onClick={() => onSumitUserInterests()}
            >
              {isSubmitting ? "Submitting....." : "Next"}
            </button>
          </div>

          <div
            className="main-content__footer"
            onClick={() => navigate("/dashboard")}
          >
            <p>Skip for later</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestPage;
