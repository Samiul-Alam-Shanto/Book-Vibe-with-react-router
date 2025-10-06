import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../utilities/addToLS";
import ReadList from "../ReadList/ReadList";

const LatestBooks = () => {
  const [readList, setReadList] = useState([]);
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

  return (
    <div className="container mx-auto my-5">
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read List"
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
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default LatestBooks;
