import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    category,
    publisher,
    rating,
    review,
    image,
    tags,
  } = book;

  return (
    <div className="card lg:w-80 xl:w-96 mx-auto border border-gray-200 rounded-2xl p-4 cursor-pointer">
      <figure className="bg-base-300 rounded-2xl">
        <img className="h-60 p-5" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex my-2 text-emerald-500 gap-4">
          {tags.map((tag, ind) => (
            <span
              key={ind}
              className="bg-gray-100 px-2 py-1 font-workSans text-[18px] rounded-xl"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="card-title text-3xl font-bold">{bookName}</h2>
        <p className="font-workSans">By : {author}</p>
        <hr className="border-dashed border-gray-400 my-2" />
        <div className="card-actions justify-between ">
          <div className="font-workSans">{category}</div>
          <div className="font-workSans flex items-center gap-1">
            {rating} <Star className="w-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
