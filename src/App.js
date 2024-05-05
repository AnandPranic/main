import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutus/AboutUs";
import Courses from "./components/courses/Courses";
import Events from "./components/events/Events";
import InquireNow from "./components/inquire-now/InquireNow";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/inquire-now" element={<InquireNow />} />
            <Route path="/Services" element={<Services />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
