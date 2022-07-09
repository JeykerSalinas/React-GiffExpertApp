import React from "react";
import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GiffGrid } from "./components/GiffGrid";
export const GifExpert = () => {
  const [categories, setCaregories] = useState(["Avatar"]);

  return (
    <div>
      <h2>Gif Expert App</h2>
      <AddCategory setCaregories={setCaregories} />

      <hr />

      <ol>
        {categories.map((category) => {
          return <GiffGrid key={category} category={category} />;
        })}
      </ol>
    </div>
  );
};
export default GifExpert;
