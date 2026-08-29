import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Testimonials from "./components/Testimonials";
import reviews from "./Data";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-200 flex flex-col items-center justify-center px-4">

      <div className="text-center w-full max-w-4xl">

        <h1 className="text-4xl font-bold text-gray-900">
          Testimonial Carousel
        </h1>

        <div className="h-1 w-32 bg-violet-400 mx-auto mt-2"></div>

        <Testimonials reviews={reviews} />

      </div>

      <ToastContainer />

    </div>
  );
};

export default App;