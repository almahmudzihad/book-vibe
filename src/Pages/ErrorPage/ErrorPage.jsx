import React from 'react';

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 text-gray-800">
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
        404
      </h1>
      <h2 className="mt-4 text-3xl font-semibold">Oops! Page Not Found</h2>
      <p className="mt-2 text-gray-600 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="/"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Go to Homepage
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition"
        >
          Contact Support
        </a>
      </div>

      <div className="mt-10">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Error illustration"
          className="w-80"
        />
      </div>
    </div>
  );
}

export default ErrorPage;