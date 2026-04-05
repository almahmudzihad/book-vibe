import React from 'react'

function Hero() {
    return (
        <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-6 container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
          <img
            src={'/hero.jpg'}
            className="max-w-md rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Books to freshen up<br></br> your bookshelf</h1>
            
            <button className="btn btn-success mt-6">View The List</button>
          </div>
        </div>
      </div>
    )
}

export default Hero
