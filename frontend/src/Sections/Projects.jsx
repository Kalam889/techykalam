import "./Projects.css"
import calculator from "../assets/calculator.png"
import restaurant from "../assets/restaurant.png"
import phising from "../assets/phising.png"

function Projects() {
    return(
        <section id="projects" className="projects-container">
            <div className="projects-header">
                <p>FEATURED PROJECTS</p>
                <h1>Some of My Recent Projects</h1>

            </div>
            <div className="card-container">
                <div className="card">
                    <img src={calculator} alt="calculator" />
                    <h3>Calculator</h3>
                    <p>A simple calculator built with HTML, CSS and JavaScript</p>
                    <div className="tags">
                        <h3>HTML</h3>
                        <h3>CSS</h3>
                        <h3>JavaScript</h3>
                    </div>
                    <div className="links">
                        <a href="https://kalam889.github.io/Calculator-/" id='demo' target="_blank"><p>Live Demo</p> </a>
                        <a href="https://github.com/Kalam889/Calculator-" id='lnk' target="_blank"><p>Github</p></a>
                    </div>
                </div>
                <div className="card">
                    <img src={restaurant} alt="calculator" />
                    <h3>Restaurant</h3>
                    <p>A modern, responsive restaurant landing page built with React, featuring elegant UI, a signature dishes showcase, and a clean mobile-friendly layout.</p>
                    <div className="tags">
                        <h3>React</h3>
                        <h3>CSS</h3>
                        <h3>JavaScript</h3>
                    </div>
                    <div className="links">
                        <a href="https://kalam889.github.io/Restaurant/" id='demo' target="_blank"><p>Live Demo</p> </a>
                        <a href="https://github.com/Kalam889/Restaurant" id='lnk' target="_blank"><p>Github</p></a>
                    </div>
                </div>
                <div className="card">
                    <img src={phising} alt="phising" />
                    <h3>Phising Guard</h3>
                    <p>Phishing Guard is a full-stack web application that analyzes website URLs and helps 
                        users identify potential phishing websites before they
                         visit them. The application combines a React frontend with a Flask backend to provide
                          a clean, responsive interface and real-time risk analysis.</p>
                    <div className="tags">
                        <h3>React</h3>
                        <h3>CSS</h3>
                        <h3>JavaScript</h3>
                    </div>
                    <div className="links">
                        <a href="https://phishing-guard-4y26lw7l5-kalam889s-projects.vercel.app/" id='demo' target="_blank"><p>Live Demo</p> </a>
                        <a href="https://github.com/Kalam889/Phishing_guard" id='lnk' target="_blank"><p>Github</p></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects;