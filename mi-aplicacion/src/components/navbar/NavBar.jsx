import "./NavBar.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import React, { useState, useEffect, useContext } from "react";
import { PageContext } from "../../utils/js/context/PageContext.js";
function NavBar() {
    const maxHeight = 200;
    const minHeight = 100;
    const disableDelay = 300; // milliseconds

    const [navbarStyle, setNavbarStyle] = useState({
        height: maxHeight,
        background: `rgba(0, 0, 0, 0.5)`,
    });
    const [isExperiencesVisible, setIsExperiencesVisible] = useState(false);
    const { setPage } = useContext(PageContext);

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

    let hoverTimeout;

    const handleMouseEnter = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setIsExperiencesVisible(true);
    };

    const handleMouseLeave = () => {
        hoverTimeout = setTimeout(() => {
            setIsExperiencesVisible(false);
        }, disableDelay);
    };

    const handleChangePage = (pageName) => {
        setPage(pageName);
    };
    return (
        <div className="navbar" style={navbarStyle}>
            <nav>
                <div className="left-bar">
                    <a onClick={() => handleChangePage("home")}>
                        <img src="/images/logotemporal.png" alt="Logo" />
                    </a>
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
                                onClick={() => handleChangePage("experiences")}
                            >
                                Experiencies
                            </a>
                            <div
                                id="experiences-box"
                                style={{
                                    display: isExperiencesVisible
                                        ? "flex"
                                        : "none",
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
                                    <p>
                                        San Sebastian &gt; St Jean Pied de Port
                                    </p>
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
                            <a >
                            Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="right-bar">
                    <ul>
                        <li>
                            <a onClick={() => handleChangePage("auth")}>
                                <PersonOutlineOutlinedIcon />
                            </a>
                        </li>
                        <li>
                            <a>
                                <FavoriteBorderOutlinedIcon />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div></div>
        </div>
    );
}

export default NavBar;
