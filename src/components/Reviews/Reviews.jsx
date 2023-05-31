/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://foodie-frenzy-server-hazel.vercel.app/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  //   for icon colors
  const starStyles = {
    color: "#ffd700",
  };
  return (
    <div className="bg-[#e8f1ea] rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-16 mt-16">
        What Our Customers Are Saying
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-evenly items-center">
              <img
                className="h-24 w-24 rounded-full"
                src={review.image}
                alt=""
              />
              <p className="text-lg font-medium mb-2">{review.name}</p>
            </div>
            <p className="text-gray-700">
              <span className="text-[#71bd46] font-bold text-2xl">
                Review:{" "}
              </span>{" "}
              {review.reviews}
            </p>
            <div className="flex items-center align-middle">
              <span className=" pl-4 text-center mr-1 text-2 text-[#71bd46]">
                Rate:
              </span>
              <Rating
                initialRating={review.rating}
                emptySymbol={<FaRegStar className="ml-2" style={starStyles} />}
                fullSymbol={<FaStar className="ml-2" style={starStyles} />}
                readonly
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
