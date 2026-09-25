import "./Journey.css"
import linux from "../assets/linux.png"
import cyber from "../assets/cyber.png"
import internet from "../assets/internet.png"
function Journey() {
    return(
        <section id="journey" className="journey-container">
            <div className="journey-header">
                <p>LATEST FROM BLOG</p>
                <h1>My Learning Notes</h1>

            </div>
            <div className="card-containerr">
                <div className="card">
                    <img src={linux} alt="linux" />
                    <h3>Linux Basics for Beginners</h3>
                    <p>Understanding the Linux file system, commands and permissions,</p>
                </div>
                <div className="card">
                    <img src={internet} alt="internet" />
                    <h3>How the Internet Works</h3>
                    <p>From yur device to the global servers, explained in simple terms.</p>       
                </div>
                <div className="card">
                    <img src={cyber} alt="cyber" />
                    <h3>Introduction to Cybersecurity</h3>
                    <p>Key concepts, tools and a roadmap to get started.</p>                    
                </div>
            </div>
        </section>
    )
}
export default Journey;