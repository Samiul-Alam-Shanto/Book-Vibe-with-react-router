import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBook, getWishBook } from "../../utilities/addToLS";
import ReadList from "../ReadList/ReadList";
import WishList from "../WishList/WishList";

const LatestBooks = () => {
  const [readList, setReadList] = useState(getStoredBook());
  const [wishList, setWishList] = useState(getWishBook());
  const [sort, setSort] = useState("");
  const allBooks = useLoaderData();

  let myReadList = allBooks.filter((book) => readList.includes(book.bookId));

  const myWishList = allBooks.filter((wishBook) =>
    wishList.includes(wishBook.bookId)
  );
  if (sort === "Ratings") {
    myReadList = [...myReadList].sort((a, b) => a.rating - b.rating);
  } else if (sort === "Pages") {
    myReadList = [...myReadList].sort((a, b) => a.totalPages - b.totalPages);
  }

  const handleSort = (type) => {
    setSort(type);
  };
  return (
    <div className="container mx-auto my-5">
      <div className="bg-gray-300 py-4 my-2 rounded-xl">
        <h2 className="font-bold text-5xl text-center">Books</h2>
      </div>
      <div className="flex justify-center my-5">
        <details className="dropdown">
          <summary className="btn text-white bg-green-500 m-1">
            Sort By : {sort ? sort : ""}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("Ratings")}>Ratings</a>
            </li>
            <li>
              <a onClick={() => handleSort("Pages")}>Pages</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read List"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {myReadList.map((singleBook) => (
            <ReadList
              key={singleBook.bookId}
              singleBook={singleBook}
              readList={readList}
              setReadList={setReadList}
            ></ReadList>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wish List"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {myWishList.map((wishBook) => (
            <WishList
              key={wishBook.bookId}
              setWishList={setWishList}
              wishBook={wishBook}
            ></WishList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBooks;
