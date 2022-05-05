import "./styles.css";
import Photo from "./Photo";
import UserName from "./UserName";
import Buttons from "./Buttons";
import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <div className="App">
        <div className="main-container">
          <Photo />
          <div className="info-container">
            <UserName />
            <Buttons />
            <About />
            <Interest />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
