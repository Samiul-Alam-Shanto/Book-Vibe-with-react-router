import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import BookDetails from "../components/BookDetails/BookDetails";
import LatestBooks from "../components/LatestBooks/LatestBooks";
import PagesChart from "../pages/PagesChart/PagesChart";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
      {
        path: "/latest-books",
        loader: () => fetch("/booksData.json"),
        Component: LatestBooks,
      },
      {
        path: "/pages-to-read",
        Component: PagesChart,
      },
    ],
  },
]);
