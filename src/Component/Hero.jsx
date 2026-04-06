import React from "react";

function Hero() {
  
  return (
    <div className="hero bg-gray-100  min-h-[70vh] rounded-2xl my-6 container mx-auto px-6">
      <div className="hero-content flex-col lg:flex-row-reverse items-center lg:items-start gap-10 w-full">
        <img
          src={"/hero.jpg"}
          className="w-full max-w-md rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
          alt="Bookshelf Hero"
        />
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
            Books to freshen up <br className="hidden md:block" /> your
            bookshelf
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Discover curated collections and timeless reads to inspire your next
            chapter.
          </p>
          <button className="btn btn-success mt-6 px-8 py-3 text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
