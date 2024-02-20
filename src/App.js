import Analysis from "./components/analysis";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div
        className="App"
        style={{ backgroundColor: "#010E1C", minHeight: "100vh" }}
      >
        <Analysis />
      </div>
    </>
  );
}

export default App;
