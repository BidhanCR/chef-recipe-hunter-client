/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-gray-800 py-8 mt-16 rounded-lg">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
          <div class="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 class="text-white font-bold mb-2">Address</h3>
            <p class="text-gray-400">123 Main St, Anytown, USA</p>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 class="text-white font-bold mb-2">Contact Us</h3>
            <p class="text-gray-400">Phone: 555-555-5555</p>
            <p class="text-gray-400">Email: info@foodfrenzy.com</p>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 class="text-white font-bold mb-2">Follow Us</h3>
            <ul class="list-none">
              <li>
                <Link to="/" class="text-gray-400 hover:text-white">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="/" class="text-gray-400 hover:text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="/" class="text-gray-400 hover:text-white">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 class="text-white font-bold mb-2">Newsletter</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                class="bg-gray-700 rounded-md w-full py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button
                type="submit"
                class="bg-blue-600 text-white font-bold py-2 px-4 mt-2 rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-4 text-center">
          <p class="text-gray-400">
            &copy; 2023 FoodFrenzy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
