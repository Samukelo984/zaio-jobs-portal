import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Companies from "./pages/companies/Companies";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/companies" element={<Companies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
