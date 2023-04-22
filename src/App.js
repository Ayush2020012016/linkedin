import React from 'react'
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route
          exact
          path="/home"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App