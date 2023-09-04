import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import HomePage from "./pages/HomePage";
import Display from "./pages/Display";

import './style.css'

function App() {
  return (
    <div className="container">
      <h1>BOOK STORE</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/display" element={<Display />} />
      </Routes>

    </div>
  );
}

export default App;
