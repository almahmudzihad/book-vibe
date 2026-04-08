import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../Context/BookContext";
import { FaRegStar } from "react-icons/fa";

function ReadListed({ sotingType }) {
  const { storedBooks } = useContext(BookContext);
  const [filterRedlist, setFilterRedlist] = useState(storedBooks);
  useEffect(() => {
    if (sotingType) {
      if (sotingType === "pages") {
        const storedData = [...storedBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilterRedlist(storedData);
      } else if (sotingType === "rating") {
        const storedData = [...storedBooks].sort((a, b) => a.rating - b.rating);
        setFilterRedlist(storedData);
      }
    }
  }, [sotingType, storedBooks]);
  if (filterRedlist.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-500">
          No Book in Read List
        </h1>
      </div>
    );
  }
  return (
    <div className="space-y-5">
      {filterRedlist.map((wl, index) => (
        <div
          key={index}
          className="card bg-base-100 shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row"
        >
          {/* Image Section */}
          <figure className="bg-gray-100 flex justify-center items-center p-4 lg:w-1/3">
            <img
              className=" h-48 object-cover rounded-md"
              src={wl.image}
              alt={wl.bookName}
            />
          </figure>

          {/* Content Section */}
          <div className="card-body flex-1">
            <h2 className="card-title text-lg font-bold">{wl.bookName}</h2>
            <p className="text-sm text-gray-500 font-medium">by {wl.author}</p>

            {/* Tags & Year */}
            <div className="flex flex-wrap gap-2 items-center mt-2">
              {wl.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-600"
                >
                  {tag}
                </span>
              ))}
              <span className="text-xs text-gray-600">
                Year: {wl.yearOfPublishing}
              </span>
            </div>

            {/* Publisher & Pages */}
            <div className="mt-2 text-sm text-gray-700 space-x-4">
              <span>Publisher: {wl.publisher}</span>
              <span>Total Pages: {wl.totalPages}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 mt-4">
              <p className="btn btn-sm rounded-full bg-blue-100 text-blue-600">
                Category: {wl.category}
              </p>
              <p className="btn btn-sm rounded-full bg-red-100 text-red-600 flex items-center gap-1">
                Rating <FaRegStar /> {wl.rating}
              </p>
              <p className="btn btn-sm rounded-full bg-green-200 text-green-600">
                View Details
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReadListed;
