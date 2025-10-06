import { BookOpen, FileChartColumnIncreasing, MapPin } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const WishList = ({ wishBook }) => {
  const {
    bookId,
    bookName,
    publisher,
    author,
    category,
    rating,
    image,
    tags,
    totalPages,
    yearOfPublishing,
  } = wishBook;
  return (
    <div className="flex flex-col lg:flex-row gap-5 my-5  border p-5 rounded-2xl">
      <figure className="bg-gray-300 p-10 rounded-2xl ">
        <img className="w-52 mx-auto" src={image} alt="" />
      </figure>
      <div className="w-full">
        <h2 className="text-4xl font-bold">{bookName}</h2>
        <p className="my-5 font-medium">By : {author}</p>

        <div className="flex flex-wrap gap-5">
          <span className="text-black font-bold font-workSans "> Tag</span>
          {tags.map((tag, ind) => (
            <p
              className="text-green-500  bg-green-50 px-2 rounded-2xl"
              key={ind}
            >
              #{tag}
            </p>
          ))}
          <p className="flex items-center">
            <MapPin />
            Year of Publishing : {yearOfPublishing}
          </p>
        </div>
        <div className="flex items-center gap-10 my-5">
          <p className="flex gap-2 items-center text-gray-400">
            <BookOpen /> Publisher: {publisher}
          </p>
          <p className="flex gap-2 items-center text-gray-400">
            <FileChartColumnIncreasing /> Page {totalPages}
          </p>
        </div>
        <hr className="text-gray-200 my-5" />

        <div className="flex gap-5 flex-wrap items-center">
          <p className="px-3 py-1 bg-blue-200 text-blue-700 rounded-2xl">
            {" "}
            Category: {category}
          </p>
          <p className="px-3 py-1 bg-orange-200 text-orange-700 rounded-2xl">
            Rating: {rating}
          </p>
          <Link to={`/bookDetails/${bookId}`}>
            <button className="px-3 py-1 cursor-pointer text-white bg-green-400 rounded-2xl">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishList;
