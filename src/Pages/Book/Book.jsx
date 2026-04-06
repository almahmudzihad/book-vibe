import React, { useContext } from 'react'
import { BookContext } from '../../Component/Context/BookContext';

function Book() {

      const {storedBooks } = useContext(BookContext);
      console.log(storedBooks);
      return(
        <div>
            <h2>{storedBooks.bookName}</h2>
            <h1>amar book list</h1>
        </div>
    )
}

export default Book
