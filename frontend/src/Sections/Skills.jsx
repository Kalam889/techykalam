import "./Skills.css"
import { SiPython, SiHtml5, SiJavascript, SiReact, SiFlask } from "react-icons/si";
import { FaLinux, FaGitAlt, FaCss3Alt, FaNetworkWired } from "react-icons/fa";

function Skills() {
    return(
        <section id="skills" className="skills-container">
            <p>MY SKILLS</p>
            <h1>Technology I Work With</h1>
            <div className="skills-card">
                <div className="skill">
                    <SiPython className="python"/>
                    <p>Python</p>
                </div>
                <div className="skill">
                    <FaLinux className="linux" />
                    <p>Linux</p>
                </div>
                <div className="skill">
                    <FaNetworkWired className="network"/>
                    <p>Networking</p>
                </div>
                <div className="skill">
                    <SiHtml5 className="html" />
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <FaCss3Alt className="css" />
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <SiJavascript className="js"/>
                    <p>JavaScript</p>
                </div>
                <div className="skill">
                    <SiReact className="react"/>
                    <p>React</p>
                </div>
                <div className="skill">
                    <SiFlask className="flask"/>
                    <p>Flask</p>
                </div>
                <div className="skill">
                    <FaGitAlt className="git"/>
                    <p>Git</p>
                </div>
            </div>
        </section>

)


}
export default Skills;