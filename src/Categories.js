import React from "react";

const Categories = ({ items, categories, changeCategory }) => {
  return (
    <section className="btn-container">
      {categories.map((category) => {
        return (
          <button
            className="filter-btn"
            onClick={() => changeCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </section>
  );
};

export default Categories;
