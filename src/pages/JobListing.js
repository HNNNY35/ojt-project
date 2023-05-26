// import logo from "./logo.svg";
// import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/JobListing"
          element={<div>채용공고 페이지입니다.</div>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
