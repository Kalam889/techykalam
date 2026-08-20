// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// import { useState } from "react";
// import {Link} from "react-router-dom"
// import "./BottomNav.css"
// function BottomNav(){
//     const [isOpen, setOpen] = useState(false)
//     function change(){
//         setOpen(!isOpen)
//     }


//     return (
//         <div className="bottom-nav">
//         <button className="menu-btn" onClick={change}>
//             <FontAwesomeIcon icon={faBars} />
//         </button>
//       {isOpen ? (
//         <div className="welcome-container">
//             <Link to="/">Home</Link>
//             <Link to="/projects">Projects</Link>
//             {/* <Link to="contact">Contact</Link> */}
//         {/* <Link to="socials">Socials Media</Link> */}
//         </div>

//   ):null
// }
        
//         </div>
//     )
// }
// export default BottomNav;
// -----------------


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import {Link} from "react-router-dom"
import "./BottomNav.css"
function BottomNav(){
    return (
        <>
        <div className="desktop-menu">
            <Link to="/">Home</Link>
            <Link to="projects">Projects</Link>
        </div>
        
        <details className="mobile-menu">
        <summary>
            <FontAwesomeIcon icon={faBars} />
        </summary>
        <div className="welcome-container">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            {/* <Link to="contact">Contact</Link> */}
        {/* <Link to="socials">Socials Media</Link> */}
        </div>
        </details>
        </>
    )
}
export default BottomNav;