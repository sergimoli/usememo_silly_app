import "./App.css";
// import Tasks from "./components/Tasks";
import Management from "./components/Management";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* exercici amb el hook useMemo */}
        {/* <Tasks /> */}
        {/* exerici memo/callback per a component: */}
        <Management />
      </header>
    </div>
  );
}

export default App;
