import React from 'react';

const Navbar = () => {
    return (
        <div className="nav-rectangle">
            <div className="nav-icon-title">
                <img src={"./img/troll-face.png"} className="troll-icon" />
                <h1 className="nav-title">Meme Generator</h1>
            </div>

            <h2 className="nav-course-name">My First Dynamic Website!</h2>
        </div>
    )
}

export default Navbar;