import "./Footer.css";
function Footer() {
  return (
    <footer className="footer-container">
      <div className="left-footer">
        <div className="copy-right">
          <h3 className="techy">Techy<span className="kalam">Kalam</span></h3>
          <p>©2026 TechKalam. All rights reserved.</p>
        </div>
      </div>
      <div className="middle-footer">
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="right-footer">
        <p>A curious mind builds better tommorow.</p>
      </div>
    </footer>
  );
}
export default Footer;
