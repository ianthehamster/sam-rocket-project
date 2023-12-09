import "./App.css";
import { useState } from "react";
import HookClock from "./Components/HookClock";

function App2() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div className="App">
      <header>{showClock ? <HookClock /> : "No Clock"}</header>
      <button onClick={() => setShowClock(!showClock)}>Toggle Clock</button>
    </div>
  );
}

export default App2;
