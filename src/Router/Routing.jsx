import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Mainpage from "../Screens/Mainpage";
import Shop from "../Screens/Shop";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/SignUp" element={<SignUp />} />

        <Route exact path="/" element={<Mainpage />} />
        <Route exact path="/Shop" element={<Shop />} />
      </Routes>
    </Router>
  )
}

export default Routing