import {
    FaInstagram,
    FaGithub,
    FaLinkedin,
    FaYoutube,
    FaFacebook
} from "react-icons/fa"
import "./Socials.css"
function Socials() {
    return (
        <>            
<h1>Follow me</h1>
        <div className="socials-container">
            <a href="https://www.instagram.com/techykalam?igsh=MWdueWxnOHJqazJ4ZA==" target="-blank">
                <FaInstagram/>
            </a>
            <a href="" target="-blank">
                <FaFacebook/>
            </a>
            <a href="" target="-blank">
                <FaGithub/>
            </a>
            <a href="" target="-blank">
                <FaYoutube/>
            </a>
            <a href="" target="-blank">
                <FaLinkedin/>
            </a>
        </div>
        </>
    )
};
export default Socials;