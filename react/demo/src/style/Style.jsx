import React from 'react'
import "./style.css"

function Style() {

    const internalcss = {
        background : "red",
        color : "White"
    }

    return (
        <div>

            {/* style 1)
        1) inline 
        2) internal Css not working
        3) external
      */}

            {/* style atrriute */}
            <h1 style={{ background: "blue", color: "white", padding: "30px" }}>Hello this inline css</h1>

            <h1 style={internalcss}>Hello internal css</h1>

            <h1 className='ab'>Hello this External css</h1>
        </div>
    )
}

export default Style
