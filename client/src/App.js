import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Companies from "./pages/companies/Companies";
import PostJob from "./pages/postJob/PostJob";
import Settings from "./pages/settings/Settings";
import Profile from "./pages/profile/Profile";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/companies" element={<Companies />} />
          <Route path="/postjob" element={<PostJob />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
