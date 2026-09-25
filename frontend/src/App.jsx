import Hero from "./Sections/Hero.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import About from "./Sections/About.jsx"
import Skills from "./Sections/Skills.jsx"
import Projects from "./Sections/Projects.jsx"
import Contact from "./Sections/Contact.jsx"
import Journey from "./Sections/Journey.jsx"
function App(){
 return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
        <Footer />
    </>
 )

}

export default App;
