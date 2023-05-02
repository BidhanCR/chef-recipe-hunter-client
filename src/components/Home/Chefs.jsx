/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-5xl mt-16 mb-10 text-[#71bd46] font-bold">Chefs at FoodieFrenzy</h2>
        <hr className="mb-10 border-[#71bd46] border-2"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chefs.map((chef) => (
          <div key={chef.id} className="bg-[#a8d969] rounded-lg shadow-md p-4">
            <img
              src={chef.image}
              alt={chef.name}
              className="w-full h-72 rounded-lg object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{chef.name}</h2>
            <p className="text-gray-600">
              {chef.yearsOfExperience} years of experience
            </p>
            <p className="text-gray-600">{chef.numberOfRecipes} recipes</p>
            <p className="text-gray-600">{chef.likes} likes</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">
              View Recipes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
