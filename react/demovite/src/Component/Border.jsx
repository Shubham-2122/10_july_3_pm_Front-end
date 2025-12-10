import React from 'react'

function Border() {
    return (
        <div>
            <h1 className='text-4xl border border-amber-500'>Broder data</h1>
            <h1 className='text-4xl border-2 border-dashed rounded-2xl my-2 border-red-300'>Broder data</h1>
            <h1 className='text-4xl border-4 border-double border-green-400'>Broder data</h1>
            <h1 className='text-4xl border-8 border-dotted border-blue-400 my-2'>Broder data</h1>
        </div>
    )
}

export default Border
