import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { DesktopNav, MobileNav } from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="flex sm:flex-row  bg-[#ecf4f3] scrollable-element">
      <div className="  sm:w-[300px] h-[100vh] bg-[#bae1db]  sm:block hidden">
        <DesktopNav />
      </div>
      <div className="sm:h-[100vh] w-full overflow-hidden">
        <div className="h-[7vh] sm:hidden">
          <MobileNav />
        </div>
        <div className="sm:h-[95vh] h-[88vh] overflow-y-auto scrollable-element ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skills />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="h-[5vh] mx-auto bg-[#bae1db] flex items-center justify-center ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
