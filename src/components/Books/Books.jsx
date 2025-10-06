import React from "react";
import Book from "./Book";

const Books = ({ booksData }) => {
  //   console.log(booksData);
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  my-5 mx-auto">
        {booksData.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
