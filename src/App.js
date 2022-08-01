import "./App.css";
import Remote from "./components/remote/Remote";
import Tv from "./components/tv/Tv";

function App() {
  return (
    <div className="App">
      <section>
        <Tv />
      </section>

      <section>
        <Remote />
      </section>
    </div>
  );
}

export default App;
