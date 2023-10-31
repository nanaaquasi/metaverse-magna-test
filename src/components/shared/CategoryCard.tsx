import React from "react";

interface CategoryCardProps {
  title: string;
  image: string;
}
const CategoryCard = ({ title }: CategoryCardProps) => {
  return (
    <div className="category-card">
      {/* <img src={image} alt="" /> */}
      <span>🏀</span>
      <h3>{title}</h3>
    </div>
  );
};

export default CategoryCard;
