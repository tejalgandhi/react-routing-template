import "./App.css";
import AllRouting from "./components/AllRouting/AllRouting";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <hr />
      <main className="main_content">
        <AllRouting />
      </main>
    </div>
  );
}

export default App;
