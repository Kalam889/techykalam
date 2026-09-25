import "./About.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCode,
  faUsers,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
function About() {
    return(
        <section id="about" className="about-container">
            <div className="left-about">
                <p id="about-me">About Me</p>
                <h1>A Curious Learner Building for a Better Tomorrow</h1>
                <p>Hi, I'm Kalam. I'm passionate about technology and love understanding how things work. I'm currently learning Cybersecurity, Linux, Networking, Python and Web Development. Through TechyKalam I share my projects, notes and learning journey to help others who are starting from zero.</p>
            </div>
            <div className="middle-about">
                <div className="one">
                    <div className="icon-box">
                        <FontAwesomeIcon icon={faBook} className="about-icon" />
                    </div>
                    <div className="para">
                        <h3>Self Learner</h3>
                        <p>Learnig step by step. One concept at a time.</p>
                    </div>
                </div>
                <div className="one">
                    <div className="icon-box">
                        <FontAwesomeIcon icon={faCode}  className="about-icon" />
                    </div>
                    <div className="para">
                        <h3>Build & and Practice</h3>
                        <p>I learn by building real projects.</p>
                    </div>
                </div>
                <div className="one">
                    <div className="icon-box">
                        <FontAwesomeIcon icon={faUsers} className="about-icon"/>
                    </div>
                    <div className="para">
                        <h3>Share Knowledge</h3>
                        <p>Documenting my journey to help others.</p>
                    </div>
                </div>
                <div className="one">
                    <div className="icon-box">
                        <FontAwesomeIcon icon={faBullseye} className="about-icon"/>
                    </div>
                    <div className="para">
                        <h3>Long Term Goal</h3>
                        <p>To become a skilled cybersecurity professional and build useful tools.</p>
                    </div>
                </div>
            </div>
            <div className="right-about">
                <div className="quote-card">
                    <p>"A SOFTWARE ENGINEER NOT <br />CERTIFICATE BUT <br /> BY SKILLS."</p>
                </div>

            </div>
        </section>
    )
}
export default About;