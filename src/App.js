import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const changeCategory = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newCategories = items.filter((item) => item.category === category);
    setMenuItems(newCategories);
  };

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <Categories
          items={menuItems}
          categories={categories}
          changeCategory={changeCategory}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
