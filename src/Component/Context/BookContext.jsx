import React, { Children, createContext,  useState } from "react";

export const BookContext = createContext();

function ContextComponent({children}) {
  
  const [ storedBooks , setStoredBooks] = useState([]);
  
  const handelMarkasRead = (book) =>{
   
    const isExistBook = storedBooks.find(books => books.bookId === book.bookId);
    if(isExistBook){
        alert('the book alrady add to read')
    }else{
        setStoredBooks([...storedBooks, book]);
        alert(`${book.bookName} Added to the list`)
    }
    
  }
  const data = {
    storedBooks,
    setStoredBooks,
    handelMarkasRead
  }

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
}

export default ContextComponent;
