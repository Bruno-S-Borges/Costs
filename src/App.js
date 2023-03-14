import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/paginas/Home";
import Company from "./components/paginas/Company";
import Contact from "./components/paginas/contact";
import NewProject from "./components/paginas/NewProject";
import Projects from "./components/paginas/Projects";
import Project from "./components/paginas/Project";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/newproject" element={<NewProject />}></Route>
          <Route path="/project/:id" element={<Project />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
