import "./SocialLinks.css"
import gmail from "../assets/gmail.png"
import instagram from "../assets/instagram.png"
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function SocialLinks() {
    return (
        <div className="social-links">
            <a href="#">
                <img src={gmail} alt="gmail" />
            </a>
            <a href="#"><FaLinkedin className="linkedin"/></a>
            <a href="#">
                {/* <FaInstagram className="instagram" /> */}
                <img src={instagram} />
            </a>
            <a href="#"><FaGithub className="github"/></a>
            <a href="#"><FaXTwitter className="x"/></a>
        </div>
    )
}
export default SocialLinks;