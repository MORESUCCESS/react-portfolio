import Home from "./pages/home"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Services from "./pages/services";
import Resume from "./pages/resume";
import Work from "./pages/work";
import Contact from "./pages/contact";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes (){
  const location = useLocation();

  return(
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* default route */}
          <Route path="/" element={<Home/>}/>

          {/* routes */}
          <Route path="/services" element={<Services/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </AnimatePresence>
  );
}


const App = ()=>{
  return(
    <Router>
      <AnimatedRoutes/>
    </Router>
  );
}

export default App;