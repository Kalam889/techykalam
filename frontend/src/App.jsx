import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Projects from "./pages/Projects.jsx";
import Welcome from "./pages/Welcome.jsx";
import Socials from "./components/Socials.jsx";
function App(){
 return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/socials" element={<Socials/>} />
        </Routes>
    </Router>
   
    </>
 )

}

export default App;
