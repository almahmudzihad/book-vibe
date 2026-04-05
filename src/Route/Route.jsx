import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Book from "../Pages/Book/Book";
import Homepage from "../Pages/Homepag/Homepage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Homepage
      },{
        path: 'book',
        Component: Book
      }
    ],
    errorElement: <ErrorPage />
  }
])
