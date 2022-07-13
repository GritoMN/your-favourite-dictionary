import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header"> Your Favourite Dictionary App</header>
      <main>
        <Dictionary defaultKeyword="garden" />
      </main>
    </div>
  );
}

export default App;
