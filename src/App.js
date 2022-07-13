import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="linkGit">
      {" "}
      This website was coded by Grigoriya Nikolova, and is
      <a
        href="https://github.com/GritoMN/your-favourite-dictionary"
        target="_blank"
      >
        {" "}
        open-sourced
      </a>
      <div className="App">
        <header className="App-header"> Your Favourite Dictionary App</header>
        <main>
          <Dictionary defaultKeyword="garden" />
        </main>
      </div>
    </div>
  );
}

export default App;
