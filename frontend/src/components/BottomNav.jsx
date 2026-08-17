import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import {Link} from "react-router-dom"
import "./BottomNav.css"
function BottomNav(){
    const [isOpen, setOpen] = useState(false)
    function change(){
        setOpen(!isOpen)
    }


    return (
        <>
      {isOpen ? (
        <div className="welcome-container">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            {/* <Link to="contact">Contact</Link> */}
        {/* <Link to="socials">Socials Media</Link> */}
        </div>

  ):null
}
        <button className="menu-btn" onClick={change}>
            <FontAwesomeIcon icon={faBars} />
        </button>
        </>
    )
}
export default BottomNav;