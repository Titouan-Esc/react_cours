import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <h2>Hello!</h2>
      <Header title="Bonjour c'est Antonio de Carglouch" />
      <Header title={1} />
      <Header />
    </div>
  );
}

export default App;
