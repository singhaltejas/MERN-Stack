import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>
    </div>
  );
}

export default App;
