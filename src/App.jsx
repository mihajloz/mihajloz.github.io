import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Work2 from "./components/Work2";

function App() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden">
      <Nav />
      <About />
      <Skills />
      <Work />
      <Work2 />
      <Contact />
    </div>
  );
}

export default App;
