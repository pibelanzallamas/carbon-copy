import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
