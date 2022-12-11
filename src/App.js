import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./layouts/Main";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
