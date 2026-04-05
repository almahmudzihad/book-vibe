import React, { use } from 'react'

import { FaRegStar } from 'react-icons/fa';

const bookPromis = fetch('/booksData.json').then(res => res.json());
function Allbooks() {
    const books = use(bookPromis);
    
    return (
        <div className="container mx-auto grid md:grid-cols-3 gap-10">
            {
                books.map(book => {
                    return <div className="card bg-base-100  shadow-sm">
                        <figure className='p-6 bg-gray-100'>
                            <img className='rounded-2xl h-56'
                            src={book.image}
                            alt={book.bookName} />
                        </figure>
                        <div className="card-body">
                            <div>
                                {book.tags.map(tag => (
                                    <div className="badge text-green-500 bg-green-100 font-bold mr-2">{tag}</div>
                                ))}
                            </div>
                            

                            <h2 className="card-title">{book.bookName}</h2>

                            
                            <p className='font-semibold text-lg'>{book.author}</p>
                            
                            <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
                                <div className="font-semibold">{book.category}</div>
                                <div className="font-semibold flex gap-2 items-center">{book.rating}<FaRegStar /></div>
                            </div>
                        </div>
                        </div>
                })
            }
        </div>
    )
}

export default Allbooks
