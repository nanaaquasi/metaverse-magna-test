import React from "react";
import { Category } from "../../pages/Interests/InterestPage";

interface CategoryCardProps {
  category: Category;
  setSelectedCategory?: (category: Category) => void;
  selectedCategory?: Category;
  selectedCategories?: Category[];
  onSelectCategory?: (category: Category) => void;
}

const CategoryCard = ({
  category: { id, name, icon },
  onSelectCategory,
  selectedCategory,
  selectedCategories,
}: CategoryCardProps) => {
  const isActive = () => {
    if (selectedCategory?.id === id) {
      return "active";
    }

    if (selectedCategories?.find((item) => item.id === id)) {
      return "active";
    }

    return "";
  };
  return (
    <div
      className={`category-card ${isActive()}`}
      onClick={() => {
        if (onSelectCategory) {
          onSelectCategory({ id, name, icon });
        }
      }}
    >
      <span>{icon}</span>
      <h3>{name}</h3>
    </div>
  );
};

export default CategoryCard;
