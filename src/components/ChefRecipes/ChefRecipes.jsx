/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ChefRecipes = () => {
  const { id } = useParams();
  const [chef, setChef] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/chefs/${id}`)
      .then((response) => response.json())
      .then((data) => setChef(data));
  }, [id]);

  if (!chef) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center">
          <div className="md:w-1/2 w-full p-4">
            <img
              src={chef.image}
              alt={chef.name}
              className="w-full h-72 rounded-lg object-cover mb-4"
            />
          </div>
          <div className="md:w-1/2 w-full p-4">
            <h2 className="text-5xl mt-16 mb-10 text-[#71bd46] font-bold">{chef.name}</h2>
            <hr className="mb-10 border-[#71bd46] border-2"/>
            <p className="text-gray-600 mb-4">{chef.bio}</p>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">{chef.likes} likes</p>
              <p className="text-gray-600">{chef.recipes} recipes</p>
              <p className="text-gray-600">{chef.experience} years of experience</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mt-16 mb-10 text-[#71bd46] font-bold">Recipes by {chef.name}</h2>
        <hr className="mb-10 border-[#71bd46] border-2"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chef.favorite_dishes.map((recipe) => (
            <div key={recipe.id} className="bg-[#a8d969] rounded-lg shadow-md p-4 hover:bg-[#71bd46] focus:bg-[#71bd46]">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-72 rounded-lg object-cover mb-4"
              />
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;

