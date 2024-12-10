import "./NavBar.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import React, { useState, useEffect } from "react";

function NavBar() {
    const maxHeight = 200;
    const minHeight = 100;

    const [navbarStyle, setNavbarStyle] = useState({
        height: maxHeight,
        background: `rgba(255, 255, 255, 0.5)`,
    });

    const handleScroll = () => {
        const position = window.scrollY;
        const newHeight = Math.max(minHeight, maxHeight - position);
        const heightDifference = maxHeight - minHeight;

        const newOpacity =
            1 - ((newHeight - minHeight) / heightDifference) * (1 - 0.5);

        setNavbarStyle({
            height: newHeight,
            background: `rgba(255, 255, 255, ${newOpacity})`,
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [isExperiencesVisible, setIsExperiencesVisible] = useState(false);
    let hoverTimeout;

    const handleMouseEnter = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setIsExperiencesVisible(true);
    };

    const handleMouseLeave = () => {
        hoverTimeout = setTimeout(() => {
            setIsExperiencesVisible(false);
        }, 1000);
    };

    return (
        <div className="navbar" style={navbarStyle}>
            <nav>
                <img src="/images/logotemporal.png" alt="Logo" />
                <ul>
                    <li>
                        <a>About Us</a>
                    </li>
                    <li>
                        <a>Basque Country</a>
                    </li>
                    <li>
                        <a
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            Experiencies
                        </a>
                        <div
                            id="experiences-box"
                            style={{
                                display: isExperiencesVisible ? "flex" : "none",
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="experience">
                                <a href="">Experience 1:</a>
                                <p>France &gt; Navarra</p>
                            </div>
                            <div className="experience">
                                <a href="">Experience 2:</a>
                                <p>San Sebastian &gt; St Jean Pied de Port</p>
                            </div>
                            <div className="experience">
                                <a href="">Experience 3:</a>
                                <p>Guipuzcoa Tour</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a>Stories</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
                <ul>
                    <PersonOutlineOutlinedIcon
                        style={{ color: "black", fontSize: "40px" }}
                    />
                </ul>
            </nav>
            <div></div>
        </div>
    );
}

export default NavBar;
