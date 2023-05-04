/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Chefs from "./Chefs";
import { Circles } from "react-loader-spinner";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data.slice(0, 5))); // show only 5 recipe slider on the home page
  }, []);

  return (
    <>
      {/* banner slider */}
      <Swiper
        speed={1000}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/6rwzgQG/rsz-5255.jpg"
            alt="Image 1"
            className="w-full h-[400px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/F5K4FQt/6682645.jpg"
            alt="Image 2"
            className="w-full h-[400px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/CpjQRWL/rsz-wepik-export-20230502033041.jpg"
            alt="Image 3"
            className="w-full h-[400px]"
          />
        </SwiperSlide>
      </Swiper>
      
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
          }}
        >
          <Circles color="#4fa94d" />
        </div>
      ) : (
        <Chefs />
      )}
     
     {/* trending slider  */}
      <div className="py-8 bg-gray-100 mt-12 rounded-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold">Trending Recipes</h2>
            <Link to="/recipes" className="text-green-600 hover:text-green-800 text-2xl">
              See More
            </Link>
          </div>
          <Swiper
            speed={1000}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="mySwiper"
          >
            {recipes.map((recipe) => (
              <SwiperSlide key={recipe.id}>
                <Link to='/recipes'>
                  <div className="bg-white shadow rounded-md overflow-hidden h-full">
                    <img
                      src={recipe.img}
                      alt={recipe.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium mb-2">
                        {recipe.name}
                      </h3>
                      <p className="text-gray-500 line-clamp-3">
                        {recipe.description}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          $<span className="text-yellow-600">
                            {recipe.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Home;
