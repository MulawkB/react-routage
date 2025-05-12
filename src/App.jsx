import { useState } from "react";
import {Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
