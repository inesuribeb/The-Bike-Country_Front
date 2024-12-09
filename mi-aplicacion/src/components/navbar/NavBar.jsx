import "./NavBar.css";

import React, { useState, useEffect } from "react";

function NavBar() {
    const maxHeight = 100;
    const minHeight = 60;

    const [navbarStyle, setNavbarStyle] = useState({
        height: maxHeight,
        opacity: 0.5,
    });

    const handleScroll = () => {
        const position = window.scrollY;
        const newHeight = Math.max(minHeight, maxHeight - position);
        const heightDifference = maxHeight - minHeight;

        const newOpacity =
            1 - ((newHeight - minHeight) / heightDifference) * (1 - 0.5);

        setNavbarStyle({
            height: newHeight,
            background: `rgba(0, 0, 0, ${newOpacity})`,
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="navbar" style={navbarStyle}>
            <nav>
                <img
                    src="https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png"
                    alt=""
                />
                <ul>
                    <li>
                        <a>About Us</a>
                    </li>
                    <li>
                        <a>Basque Country</a>
                    </li>
                    <li>
                        <a>Experiencies</a>
                    </li>
                    <li>
                        <a>Stories</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
