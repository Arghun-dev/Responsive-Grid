import Row from "./components/Row";
import Column from "./components/Column";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Row>
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
      </Row>
    </div>
  );
}

export default App;
