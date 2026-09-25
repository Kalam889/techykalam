import "./Contact.css"
import SocialLinks from "../components/SocialLinks.jsx"
function Contact() {
    return(
        <section id="contact" className="contact-container">
            <div className="left-contact">
                <div className="contact-para">
                    <p id="touch">GET IN TOUCH</p>
                    <h3>Let's Connect</h3>
                    <p>Have a question, suggetion or just want to say Hi</p>
                   <p>I would love to hear from you.</p>
                </div>
                <div className="social-apps">
                    <SocialLinks />
                </div>
            </div>
            <div className="right-contact">
                <div className="input-box">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    
                </div>
                <textarea placeholder="Message" rows="5" /><br/>
                <button className="btn">
                    Send Message 
                </button>
            </div>
        </section>
)

}
export default Contact;