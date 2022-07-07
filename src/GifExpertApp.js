import { useState } from "react";
import { AddCategory, GridFile } from "./components";

const GifExpertApp = () => {
  const [categories, setCategory] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategory([...categories, newCategory]);
    // setCategory((cat) => [...cat, "hitman"]);
  };
  return (
    <>
      <div>GifExoertApp</div>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      <button onClick={onAddCategory}>Agregar</button>

      {categories?.map((category) => (
        <GridFile key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
