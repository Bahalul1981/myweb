import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Project, Resum, Skills } from "../main/section/index";
import Home from "../main/home/Home";
function RouterPage() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="project" element={<Project />}></Route>
          <Route path="resum" element={<Resum />}></Route>
          <Route path="skills" element={<Skills />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterPage;
