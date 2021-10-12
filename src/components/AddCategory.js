import React from "react";
import { useState } from "react";

export const AddCategory = ({ setCategories, categories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInput = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories([inputValue, ...categories]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInput} placeholder='Search...' />
    </form>
  );
};
