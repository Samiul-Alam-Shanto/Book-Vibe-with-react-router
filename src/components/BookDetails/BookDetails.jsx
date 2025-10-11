import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreLS, addToWishLS } from "../../utilities/addToLS";

const BookDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const numId = Number(id);

  const singleBook = data.find((book) => book.bookId === numId);
  const {
    bookName,
    yearOfPublishing,
    author,
    category,
    publisher,
    rating,
    totalPages,
    review,
    image,
    tags,
  } = singleBook;
  // console.log(singleBook);

  const handleMarkAsRead = (id) => {
    //store with id
    //where to store(database or local storage )
    // array or collection
    // if book already exists show an alert
    // if book not exist then push in the collection or array
    addToStoreLS(id);
  };

  const handleWishList = (id) => {
    addToWishLS(id);
  };
  return (
    <div className="flex flex-col gap-5 lg:flex-row bg-base-100 items-center shadow-sm container mx-auto my-5 p-2">
      <figure className="flex-1 p-12 bg-gray-200 rounded-2xl mx-auto">
        <img className="mx-auto" src={image} alt="Album" />
      </figure>
      <div className="flex-1">
        <h2 className="card-title font-bold text-5xl ">{bookName}</h2>
        <p className="text-xl  my-5">By : {author}</p>
        <hr className="text-gray-200" />
        <p className="my-5  text-xl">{category}</p>
        <hr className="text-gray-200" />
        <div>
          <h4 className=" mt-5 text-gray-500 font-workSans">
            <span className=" font-bold text-black font-workSans">
              Review :{" "}
            </span>{" "}
            {review}
          </h4>
        </div>
        <div className="flex gap-10 my-5">
          <span className="text-black font-bold font-workSans "> Tag</span>
          {tags.map((tag, ind) => (
            <p
              className="text-green-500  bg-green-50 px-2 rounded-2xl"
              key={ind}
            >
              #{tag}
            </p>
          ))}
        </div>
        <hr className="text-gray-200" />

        <div className="flex items-center gap-20 my-5">
          <div>
            <p className="text-gray-500 ">Number of Pages:</p>
            <p className="text-gray-500 ">Publisher:</p>
            <p className="text-gray-500 ">Year of Publishing:</p>
            <p className="text-gray-500 ">Rating:</p>
          </div>
          <div>
            <p className="text-black font-bold ">{totalPages}</p>
            <p className="text-black font-bold ">{publisher}</p>
            <p className="text-black font-bold ">{yearOfPublishing}</p>
            <p className="text-black font-bold ">{rating}</p>
          </div>
        </div>

        <div className="card-actions ">
          <button onClick={() => handleMarkAsRead(numId)} className="btn">
            Add To ReadList
          </button>
          <button
            onClick={() => handleWishList(numId)}
            className="btn bg-[#50B1C9] text-white"
          >
            Add to WishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
