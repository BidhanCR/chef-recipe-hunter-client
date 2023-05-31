/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipes = () => {
  const { id } = useParams();
  const [chef, setChef] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openModal = (recipe) => {
    console.log("Opening modal with recipe:", recipe);
    setSelectedRecipe(recipe);
    setShowModal(true);
    console.log("showModal:", showModal);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setShowModal(false);
  };

  useEffect(() => {
    fetch(`https://foodie-frenzy-server-hazel.vercel.app/chefs/${id}`)
      .then((response) => response.json())
      .then((data) => setChef(data));
  }, [id]);

  if (!chef) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ToastContainer />
      <div className="bg-[#e8f1ea] p-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center">
          <div className="md:w-1/2 w-full p-4">
            <img
              src={chef.image}
              alt={chef.name}
              className="w-full h-72 rounded-lg object-cover mb-4"
            />
          </div>
          <div className="md:w-1/2 w-full p-4">
            <h2 className="text-5xl mt-4 mb-4 text-[#71bd46] font-bold">
              {chef.name}
            </h2>
            <hr className="mb-5 border-[#71bd46] border-2" />
            <p className="text-gray-600 mb-4">{chef.bio}</p>
            <div className="flex justify-between items-center mb-4">
              <p>
                <span className="font-bold text-[#71bd46]">{chef.likes}</span>{" "}
                likes
              </p>
              <p>
                <span className="font-bold text-[#71bd46]">{chef.recipes}</span>{" "}
                recipes
              </p>
              <p>
                <span className="font-bold text-[#71bd46]">
                  {chef.experience}
                </span>{" "}
                years of experience
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl mt-16 mb-10 text-[#71bd46] font-bold">
          Recipes by {chef.name}
        </h2>
        <hr className="mb-10 border-[#71bd46] border-2" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {chef.favorite_dishes.map((recipe) => (
            <div
              key={recipe.recipe_name}
              className="bg-[#e8f1ea] rounded-lg shadow-md p-4 hover:bg-[#b3ccb9] focus:bg-[#71bd46] relative"
            >
              <img
                src={recipe.recipe_image}
                alt={recipe.recipe_name}
                className="w-full h-72 rounded-lg object-cover mb-4"
              />
              <p className="border-2 border-indigo-600 bg-warning w-24 rounded-lg text-white glass absolute top-4 right-4">
                Rating: {recipe.rating}
              </p>
              <h2 className="text-xl font-semibold mb-2">
                {recipe.recipe_name}
              </h2>
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
              <button
                onClick={() => openModal(recipe)}
                className="btn bg-[#71bd46] hover:bg-[#255d05] font-bold text-2xl text-white w-full mt-2"
              >
                View Details
              </button>
              {showModal && selectedRecipe && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                  <div className="flex items-center justify-center min-h-screen px-4">
                    <div className="fixed inset-0"></div>
                    <div className="bg-[#e8f1ea] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6 border-2 border-warning">
                      <div className="mt-3 text-center sm:mt-5">
                        <h3 className="text-lg font-extrabold leading-6 font-medium text-gray-900">
                          {selectedRecipe.recipe_name}
                        </h3>
                        <hr className="my-4 border-[#71bd46] border-2" />
                        <div className="mt-2">
                          <p className="text-sm leading-5 text-gray-500 text-left">
                            {selectedRecipe.recipe_description}
                          </p>
                          <h4 className="font-extrabold text-lg my-4">
                            Ingredients
                          </h4>
                          <hr className="my-4 border-[#71bd46] border-2" />

                          <ul className="list-disc list-inside text-left">
                            {selectedRecipe.ingredients.map(
                              (ingredient, index) => (
                                <li
                                  key={index}
                                  className="text-sm leading-5 text-gray-500"
                                >
                                  {ingredient}
                                </li>
                              )
                            )}
                          </ul>
                          <h4 className="text-lg font-extrabold mt-4">
                            Cooking Method
                          </h4>
                          <hr className="my-4 border-[#71bd46] border-2" />
                          <p className="text-left">
                            {selectedRecipe.cooking_method}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 sm:mt-6">
                        <span className="flex w-full rounded-md shadow-sm">
                          <button
                            onClick={closeModal}
                            type="button"
                            className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                          >
                            Close
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
