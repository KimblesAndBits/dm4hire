import React from 'react';

function landingPageBg() {
    const bgImage = require("../../images/landingPageBackground.png");

    return(
        <div style={{
            height: '100vh',
            width: "100vw",
            backgroundImage: `url(${bgImage})`
          }}></div>
    )
}

export default landingPageBg;