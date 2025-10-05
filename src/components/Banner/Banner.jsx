import React from "react";
import bookImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 container mx-auto rounded-2xl my-5 py-5">
      <div className="hero-content flex-col lg:flex-row-reverse md:gap-40">
        <img src={bookImage} className=" rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Books to freshen up <br className="hidden xl:block" /> your
            bookshelf
          </h1>

          <button className="btn btn-success font-workSans text-white">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
