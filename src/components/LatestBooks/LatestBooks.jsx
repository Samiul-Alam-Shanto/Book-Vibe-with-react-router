import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBook, getWishBook } from "../../utilities/addToLS";
import ReadList from "../ReadList/ReadList";
import WishList from "../WishList/WishList";

const LatestBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const allBooks = useLoaderData();
  //   console.log(allBooks);

  useEffect(() => {
    const storedBookData = getStoredBook();
    // console.log(storedBookData);
    const myReadList = allBooks.filter((book) =>
      storedBookData.includes(book.bookId)
    );
    // console.log(myReadList);
    setReadList(myReadList);
  }, []);

  useEffect(() => {
    const storedWishData = getWishBook();
    // console.log(storedWishData);
    const myWishList = allBooks.filter((wishBook) =>
      storedWishData.includes(wishBook.bookId)
    );
    setWishList(myWishList);
  }, []);

  return (
    <div className="container mx-auto my-5">
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read List"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readList.map((singleBook) => (
            <ReadList
              key={singleBook.bookId}
              singleBook={singleBook}
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
          {wishList.map((wishBook) => (
            <WishList key={wishBook.bookId} wishBook={wishBook}></WishList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBooks;
