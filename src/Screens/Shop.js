import Card from "../Components/Card";
import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
// import NavBar from '../Components/NavBar'
import Header from "../Components/Header";
// import { EightData } from "../backend/EightData";
import Images from "../Components/Images";
import ClickProps from "../Components/ClickProps";
import Loader from "../Components/Loader";

const Shop = () => {
  const [IsHide, setIsHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsHide(true);
    }, 3000);
  }, IsHide);

  return !IsHide ? (
    <>
      <Loader />
    </>
  ) : (
    <>
      <Header />
      <ClickProps />
      <Images />
      <Footer />
    </>
  );
};

export default Shop;
