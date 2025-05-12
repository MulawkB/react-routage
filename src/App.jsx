import { useState } from "react";
import {Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import Category from "./pages/Category.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/category/:categoryId" element={<Category />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
