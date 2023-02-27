import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Mainpage from "../Screens/Mainpage";
import Shop from "../Screens/Shop";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import ProductDetails from '../Components/ProductDetails'
import AddToCart from "../Components/AddToCart";
import WishList from "../Components/WishList";
const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/WishList" element={<WishList />} />

        <Route exact path="/AddToCart" element={<AddToCart />} />

        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/ProductDetails" element={<ProductDetails />} />
        <Route exact path="/" element={<Mainpage />} />
        <Route exact path="/Shop" element={<Shop />} />
      </Routes>
    </Router>
  )
}

export default Routing