import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Work from "./components/Work";

function App() {
  return (
    <div className="overflow-x-hidden scroll-smooth w-full">
      <Nav />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
