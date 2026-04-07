import React, { Children, createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

function ContextComponent({ children }) {
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handelMarkasRead = (book) => {
    const isExistBook = storedBooks.find(
      (books) => books.bookId === book.bookId,
    );
    if (isExistBook) {
      toast.error(`${book.bookName} alrady added`);
    } else {
      setStoredBooks([...storedBooks, book]);
      toast.success(`${book.bookName} Added to the list`);
    }
  };
  const handelWishlist = (book) => {
    const isExistReadList = storedBooks.find(sbook => sbook.bookId == book.bookId)
    if(isExistReadList){
      toast.error(` Already Read list " ${book.bookName} "`);
      return;
    }
    const isExistBook = wishlist.find(
      (books) => books.bookId === book.bookId,
    );
    if (isExistBook) {
      toast.error(`${book.bookName} alrady added Wish Lish`);
    } else {
      setWishlist([...wishlist, book]);
      toast.success(`${book.bookName} Added to the Wish Lish`);
    }
  };
  const data = {
    storedBooks,
    setStoredBooks,
    handelMarkasRead,
    handelWishlist,
    wishlist
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
}

export default ContextComponent;
