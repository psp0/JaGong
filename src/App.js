import "./App.css";
import ApiTest from "./components/ApiTest";
import Map from "./components/Map/Map";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Map />
        <ApiTest />
      </header>
    </div>
  );
}

export default App;
