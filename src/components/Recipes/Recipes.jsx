/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
        {recipes.map((recipe) => (
          <div className="w-96 bg-[#e8f1ea] shadow-xl rounded-lg overflow-hidden">
            <img
              src={recipe.img}
              alt="recipe"
              className="w-full h-48 object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{recipe.name}</div>
              <p className="text-gray-700 text-base">{recipe.description}</p>
            </div>
            <div className="px-6 py-4 flex justify-end">
            <button
                className="btn btn-warning text-white w-full hover:bg-yellow-600"
                onClick={() => {
                  toast.success(
                    `${recipe.recipe_name} is now your favorite recipe!`
                  );
                  event.target.disabled = true;
                }}
              >
                Add to Favourite
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recipes;
