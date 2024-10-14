import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Nav from "./components/Nav";
import ProImg from './assets/img/profile.jpg'
import { Social } from "./components/Container"
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav header="Ismael" logo={ProImg}/>
        <Routes>
          <Route path="/" exact element={<Home src={ProImg}/>} />
          <Route path="/projects" exact element={<Project src={ProImg}/>} />
          <Route path="/p/:id" exact element={<Project />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/cv" exact element={{}} />
        </Routes>
        <Social/>
      </BrowserRouter>
    </div>
  );
}

export default App;
