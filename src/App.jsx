import React from "react";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import { useState } from "react";
import "./App.css";
import Home from "./pages/home";

const App = () => {
  const [activePage, setActivePage] = useState("home");
  return (
    <div>
      {activePage === "login" && <Login />}
      {activePage === "header" && <Header />}
      {activePage === "home" && <Home />}
    </div>
  );
};

export default App;
