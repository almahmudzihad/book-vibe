import React, { use } from 'react'


import BookCard from './BookCard';

const bookPromis = fetch('/booksData.json').then(res => res.json());

function Allbooks() {
    const books = use(bookPromis);

    return (
        <div className="container mx-auto px-4 py-10 grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                books.map((book, index) => <BookCard key={index} book={book} />)
            }
        </div>
    )
}

export default Allbooks
