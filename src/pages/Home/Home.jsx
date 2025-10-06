import React from "react";
import Banner from "../../components/Banner/Banner";

import { useLoaderData } from "react-router";
import Books from "../../components/Books/Books";

const Home = () => {
  const booksData = useLoaderData();
  // console.log(booksData);
  return (
    <div>
      <Banner />
      <Books booksData={booksData} />
    </div>
  );
};

export default Home;
