import "./Hero.css";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import desk from "../assets/hero-desk.png"

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-left">

        <p className="hero-greeting">Hi, I'm Kalam.</p>

        <h1>
          Different Tools.
          <br />
          Same Curiosity.
        </h1>

        <p className="hero-text">
          Exploring Cybersecurity, Python, Linux, Networking and Web
          Development while building projects in public.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Let's Talk
          </a>

          <a href="#projects" className="btn-secondary">
            View Projects
          </a>
        </div>

        <div className="social-icons">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><MdEmail /></a>
        </div>

      </div>

      <div className="hero-right">
        <img
          src={desk}
          alt="Coding Desk"
        />
      </div>

    </section>
  );
}

export default Hero;