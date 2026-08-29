import { useState } from "react";
import { toast } from "react-toastify";
import Card from "./Card";

const Testimonials = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  const prevReview = () => {
    setIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const nextReview = () => {
    setIndex((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  const surpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);

    setIndex(randomIndex);

    toast.success("Surprise! New review!");
  };

  return (
    <div className="mt-12">
      <Card
        review={reviews[index]}
        prevReview={prevReview}
        nextReview={nextReview}
        surpriseMe={surpriseMe}
      />
    </div>
  );
};

export default Testimonials;