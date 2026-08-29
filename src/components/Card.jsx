import {
  FaQuoteLeft,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Card = ({ review, prevReview, nextReview, surpriseMe }) => {
  return (
    <div className="relative bg-white max-w-3xl mx-auto min-h-[430px] shadow-md px-10 pt-14 pb-8">

      <img
        src={review.image}
        alt={review.name}
        className="absolute -top-16 left-8 w-[140px] h-[140px] rounded-full object-cover border-4 border-violet-400"
      />

      <div className="flex flex-col items-center text-center">

        <h2 className="text-2xl font-bold text-gray-800">
          {review.name}
        </h2>

        <p className="text-sm uppercase tracking-wide text-violet-300 font-semibold mt-1">
          {review.job}
        </p>

        <FaQuoteLeft className="text-violet-400 text-2xl mt-6" />

        <p className="text-gray-600 leading-7 max-w-2xl mt-4">
          {review.text}
        </p>

        <FaQuoteRight className="text-violet-400 text-2xl mt-5" />

        <div className="flex gap-8 mt-6">
          <button onClick={prevReview}>
            <FaChevronLeft className="text-violet-400 text-xl" />
          </button>

          <button onClick={nextReview}>
            <FaChevronRight className="text-violet-400 text-xl" />
          </button>
        </div>

        <button
          onClick={surpriseMe}
          className="mt-5 bg-violet-400 hover:bg-violet-500 text-white font-semibold px-10 py-3"
        >
          Surprise Me
        </button>

      </div>
    </div>
  );
};

export default Card;