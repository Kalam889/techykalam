import BottomNav from "../components/BottomNav";
import "./Projects.css"
import {
    FaInstagram,
    FaGithub,
    FaLinkedin,
    FaYoutube,
    FaFacebook
} from "react-icons/fa"
function Projects() {
    return (
        <>
        <BottomNav/>
        <h2 className="projects-title">My Projects</h2>
        {/* <div className="project-upi">
            <h1>UPI APP</h1>
            <a href="https://upi-app-clmf.onrender.com " target="_blank">View</a>
            <h1>Calculator</h1>
            <a href="https://kalam889.github.io/Calculator-/" target="_blank">View</a>
        </div> */}
        <div className="projects-container">

            <div className="project-calculator">
                <img src="/projects/Calculator.png" alt="Calculator" />
                <p>A simple calculator built using HTML, CSS and JavaScript.</p>
                <a href="https://kalam889.github.io/Calculator-/" target="_blank"> View demo</a>
                <a href="https://kalam889.github.io/Calculator-/" target="_blank"> <FaGithub/> GitHub</a>

                {/* <video src="/projects/Calculator-demo.mp4" /> */}
            </div>

            <div className="project-nature">
                <img src="/projects/Nature.png" alt="Nature" />
                <p>A beautiful nature landing page built using HTML, CSS grid</p>
            </div>

            <div className="project-login">
                <img src="#" alt="Login" />
                <p>A login page built using HTML, CSS and JavaScript</p>
            </div>
        </div>
        </>
    )
}
export default Projects;