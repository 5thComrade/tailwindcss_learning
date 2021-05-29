import React from "react";
import Card from "../Card/Card";

import { latest } from "../../data";

const Body = () => {
  return (
    <main className="px-16 py-6 bg-gray-100 md:col-span-4">
      <div className="flex justify-center md:justify-end">
        <a
          href="#"
          className="transition-all duration-700 ease-in-out text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white"
        >
          Log In
        </a>
        <a
          href="#"
          className="transition-all duration-700 ease-in-out text-primary ml-3 btn border-primary md:border-2 hover:bg-primary hover:text-white"
        >
          Sign Up
        </a>
      </div>
      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Recipies</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </header>
      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest Recipies
        </h4>
        <div className="mt-8 grid md:grid-cols-3 gap-10">
          {latest.map((recipe) => (
            <Card
              key={recipe.id}
              img={recipe.img}
              title={recipe.title}
              description={recipe.description}
              time={recipe.time}
            />
          ))}
        </div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Most Popular
        </h4>
        <div className="mt-8">{/* Card Go Here */}</div>

        <div className="flex justify-center">
          <div className="bg-secondary-100 text-secondary-200 btn hover:shadow-inner">
            Load more
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
