import React from "react";
import { useSearchParams } from "react-router-dom";

const Article = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const sortBy = searchParam.get("sortBy");
  const category = searchParam.get("category");

  const handleSortByView = () => {
    console.log("in method");
    setSearchParam({
      sortBy: "Views",
      category,
    });
  };

  return (
    <div>
      <h2>Article</h2>
      <h2>Sort BY:{sortBy}</h2>
      <h2>Category:{category}</h2>
      <button onClick={handleSortByView} style={{ cursor: "pointer" }}>
        Sort By View
      </button>
    </div>
  );
};

export default Article;
