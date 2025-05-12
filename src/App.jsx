import { useState } from "react";
import {Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import Category from "./pages/Category.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" index element={<Home />}/>
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
