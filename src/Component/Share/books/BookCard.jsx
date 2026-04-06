import React from "react";
import { FaRegStar } from 'react-icons/fa';
import { Link } from "react-router";

function BookCard({ book }) {
  return (
    <Link to={`BookDetels/${book.bookId}`} className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group">
      
      <div className="bg-gray-100 p-5 flex justify-center">
        <img
          className="h-52 object-cover rounded-xl group-hover:scale-105 transition duration-300"
          src={book.image}
          alt={book.bookName}
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-sm text-gray-500 font-medium">by {book.author}</p>

        {/* Bottom Section */}
        <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-3 text-sm">
          <span className="font-semibold text-gray-600">{book.category}</span>

          <span className="flex items-center gap-1 font-semibold text-yellow-500">
            {book.rating} <FaRegStar />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default BookCard;
