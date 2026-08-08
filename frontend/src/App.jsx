import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Projects from "./pages/Projects.jsx";
import Welcome from "./pages/Welcome.jsx";

function App(){
 return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/projects" element={<Projects/>} />
        </Routes>
    </Router>
   
    </>
 )

}

export default App;
