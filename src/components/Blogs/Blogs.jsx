/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Blogs = () => {
  return (
    <div className="bg-[#e8f1ea]">
      <h2 className="text-5xl pt-16 mb-10 text-[#71bd46] font-bold">Some Questions and Answers</h2>
        <hr className="mb-10 border-[#71bd46] border-2"/>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
        Differences between uncontrolled and controlled components:
        </div>
        <div className="collapse-content">
          <p>Controlled components in React are components that have their value and state managed by the React component's state. This means that the value of the component is set by the React component's state and can only be changed by updating the state of the component. In contrast, uncontrolled components are components that manage their own state and value. They do not rely on the React component's state and can be changed directly by the user.</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
        How to validate React props using PropTypes
        </div>
        <div className="collapse-content">
          <p>React provides a utility called PropTypes to help validate the types of props being passed to a component. PropTypes are used to ensure that the component is receiving the correct data type and that the data is in the expected format. To use PropTypes in a React component, you will need to import the PropTypes library, and then define the propTypes object as a static property of the component.</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
        Difference between nodejs and express js.
        </div>
        <div className="collapse-content">
          <p>Node.js is a runtime environment that allows developers to run JavaScript code outside of a browser. It is built on top of the Chrome V8 engine and is used to build scalable network applications. Express.js, on the other hand, is a web application framework that is built on top of Node.js. It provides a set of tools and utilities to build web applications and APIs quickly and easily. While Node.js provides the platform for building applications, Express.js provides a framework for building the web layer of those applications.</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
        What is a custom hook, and why we create a custom hook?
        </div>
        <div className="collapse-content">
          <p>A custom hook is a function in React that allows you to reuse stateful logic between different components. Custom hooks are used to abstract complex logic from the components and to make the code more modular and reusable. Custom hooks are built using the same rules as React hooks, meaning that they must begin with the word "use" and they can only be used in functional components. <br />
          You might create a custom hook when you have a piece of logic that is used in multiple components, or when you want to separate your component's concerns into smaller, more manageable pieces. By creating a custom hook, you can encapsulate the stateful logic and provide a simple interface for other components to use.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
