import React, { useContext } from "react";
import { GlobalContext } from "./components/context/globalProvider";

function App() {
  const data = useContext(GlobalContext);
  console.log(data);
  return <div className="App">ABCDE</div>;
}

export default App;
