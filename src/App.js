import './App.css';
import React, { useState, useEffect } from 'react'
import Routing from './Router/Routing';
import file from './Screens/file';
import { TypeAnimation } from 'react-type-animation';
import TextAnimation from "react-text-animations";
import JavaScript from './Components/JavaScript'

import Loader from '../src/Components/Loader';
function App() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      {/* <Routing/> */}
      <Routing />
      {/* <JavaScript /> */}
      {/* <Loader /> */}



    </>
  );
}

export default App;
