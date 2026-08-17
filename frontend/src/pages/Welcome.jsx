import BottomNav from "../components/BottomNav";
import Socials from "../components/Socials";
import "./Welcome.css";
function Welcome() {
    return (
        <>
        <div className="welcome-layout">
        <BottomNav/>
        <div className="welcome-page">
            <h2 className="welcome-title">Welcome To</h2>
            <h1 className="welcome-heading">Techy Kalam</h1>
            <h2>This is Abul Kalam</h2>
            <h2>A guy who is curious to learn TECHNOLOGY.</h2>
            <h2>I will be sharing my learnig here.</h2>
        </div>
        </div>
        <Socials/>
        </>
    )
};

export default Welcome;