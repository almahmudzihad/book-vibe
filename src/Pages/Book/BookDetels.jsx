import React, { use, useContext, useState } from "react";
import { useParams } from "react-router";
import { BookContext } from "../../Component/Context/BookContext";


const bookPromis = fetch("/booksData.json").then((res) => res.json());

function BookDetels() {
  const books = use(bookPromis);
  const params = useParams();
  const book = books.find((book) => book.bookId == params.id);

  if (!book) {
    return (
      <p className="text-center mt-10 text-red-500 font-medium">
        Book not found
      </p>
    );
  }

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;



  const {handelMarkasRead } = useContext(BookContext);
    
    

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        
        {/* Image */}
        <div className="bg-gray-50 rounded-xl p-8 flex justify-center">
          <img
            src={image}
            alt={bookName}
            className="w-64 object-contain"
          />
        </div>

        {/* Content */}
        <div className="space-y-5">
          {/* Title */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">
              {bookName}
            </h1>
            <p className="text-gray-500 mt-1">by {author}</p>
          </div>

          {/* Category */}
          <p className="text-sm text-gray-600 border-b pb-3">
            {category}
          </p>

          {/* Review */}
          <p className="text-gray-700 leading-relaxed text-sm">
            {review}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Info */}
          <div className="border-t pt-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Pages</span>
              <span className="font-medium">{totalPages}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Publisher</span>
              <span className="font-medium">{publisher}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Year</span>
              <span className="font-medium">{yearOfPublishing}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Rating</span>
              <span className="font-medium">{rating}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-5">
            <button 
            onClick={()=>handelMarkasRead(book)}
            className="px-6 py-2 bg-gray-800 text-white rounded-md text-sm">
              Mark as Read
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded-md text-sm">
             Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetels;