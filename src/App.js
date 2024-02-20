import Analysis from "./components/analysis";
import Navbar from "./components/navbar";
import BasicTable from "./components/Table1";
function App() {
  return (
    <>
      <Navbar />
      <div
        className="App"
        style={{ backgroundColor: "#010E1C", minHeight: "100vh" }}
      >
        <Analysis />
<BasicTable/>
      </div>
    </>
  );
}

export default App;
