import { useState } from "react";
import "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FaBars} from "react-icons/fa6"
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [isMobile, setMobile] = useState(false);
    return (
        <>
        <nav className="navbar">
            <div className="logo">
                Techy
                <span className="kalam">Kalam</span>
            </div>
            <div className="nav-menu">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#journey">Journey</a>
                <a href="#contact">Contact</a>
            </div>
            <a href="#contact" className="talk-btn">Let's Talk</a>
            <div className="menu-icon">
                <button className="menu-btn" onClick={() => setMobile(true)}><FaBars /></button>
            </div>
        </nav>
        {/* #Mobile_view */}
        {isMobile && (
            <div className="mobile-menu">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#journey">Journey</a>
                <a href="#contact">Contact</a>
                <button className="menu-btn" onClick={() => setMobile(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
        )}
        </>

    )
}
export default Navbar;