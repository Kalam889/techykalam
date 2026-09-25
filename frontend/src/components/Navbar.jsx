import "./Navbar.css"
import {FaBars} from "react-icons/fa6"
function Navbar() {
    return (
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
            <a href="contact" className="talk-btn">Let's Talk</a>
            <div className="menu-icon">
                <FaBars />
            </div>
        </nav>
    )
}
export default Navbar;