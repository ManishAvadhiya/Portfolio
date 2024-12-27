import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Technology from "./components/Technology.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import DockNavbar from "./components/DockNavbar.jsx";
import Loader from "./components/Loader.jsx";

const App = () => {
  const [showInitialLoader, setShowInitialLoader] = useState(true);    

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowInitialLoader(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if(showInitialLoader){
        return <Loader />;  
    }

  return (
    <div className="overflow-x-hidden text-white antialiased">
      <div className=" fixed top-0 -z-10 h-full w-full">
      <div class="relative h-full w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technology />
        <Experience />
        <Projects />
        <Contact />
        <DockNavbar />
      </div>
      
    </div>
  );
};

export default App;
