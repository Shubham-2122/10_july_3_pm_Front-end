import React from 'react'

function Media() {
  return (
    <div>
        <div className="md:flex">
            <div className="md:w-1/2 lg:bg-amber-400 border-2 md:text-center">1</div>
            <div className="md:w-1/2 sm:bg-red-400 xl:bg-green-400 border-2">2</div>
        </div>
    <button className='btn'>Hellpo</button>
        <h1>hello this data</h1>
        <h2 className='font text-4xl'>Hello this data here</h2>
           <h2 className='font1 bg-amber-200 pad text-4xl'>Hello this data here</h2>
          <h1 className='text-7xl'>hello this data</h1>

         <div className="flex">
             <div className="card">
          </div>
           <div className="card">
          </div> <div className="card">
          </div>
         </div>
         
    </div>
  )
}

export default Media
