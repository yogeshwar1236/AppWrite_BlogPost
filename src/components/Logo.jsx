import React from "react";

function Logo({width = '100px'})  {

    return(
        <img
            src="https://i.pinimg.com/1200x/f3/75/0f/f3750f16f4589c92c1010739530972bf.jpg"
            alt="Blog logo"
            style={{ width }}
            className="block rounded object-cover"
        />
    )
}

export default Logo
