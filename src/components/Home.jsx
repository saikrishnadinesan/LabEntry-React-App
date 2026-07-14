import React from "react";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div>

      <Navigation />

      <div className="container mt-5">

        <div className="text-center">

          <h1 className="display-4">Lab Entry Management System</h1>

          <p className="lead mt-4">
            Welcome to the Lab Entry Management System.
          </p>

          <p>
            Use the navigation bar to add new lab entries and view all lab records.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Home;