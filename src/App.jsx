import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden">
      <Nav />
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

export default App;
