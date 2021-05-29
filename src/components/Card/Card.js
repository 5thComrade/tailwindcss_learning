import React from "react";

const Card = (props) => {
  const { img, title, description, time } = props;
  return (
    <div className="transition-all duration-700 ease-in-out card hover:shadow-lg transform hover:scale-105">
      <img src={img} alt={title} className="w-full h-40 sm:h-56 object-cover" />
      <div className="m-4">
        <span className="font-bold">{title}</span>
        <span className="block text-gray-500 text-sm">{description}</span>
      </div>
      <div className="badge flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{time} mins</span>
      </div>
    </div>
  );
};

export default Card;
