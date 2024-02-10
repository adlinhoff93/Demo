import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";

function Header() {
  return (
    <div>
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            background: "black",
            padding: "5px 0 5px 5px",
            fontSize: "20px",
          }}
        >
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
              })}
            >
              Home
            </NavLink>
          </div>
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/Aboutus"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
              })}
            >
              Aboutus
            </NavLink>
          </div>
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/Contactus"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
              })}
            >
              Contactus
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Aboutus" element={<Aboutus />}></Route>
          <Route exact path="/Contactus" element={<Contactus />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Header;
