import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useNavigate } from 'react-router-dom';
// import Shop from '../Screens/Shop';
import { Button, Input } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../Components/Loader';
const Header = (
    {
        onChange
    }
) => {

    const [IsHide,setIsHide]=useState(false);

 const navigate = useNavigate();
    const shop = () => {
            navigate('/Shop');
    }

    const home = () =>{
        navigate('/')
    }

    useEffect(()=>{
        setTimeout(() => {
            setIsHide(true)
        }, 3000);
    },IsHide)

  return !IsHide ?  (

    <Loader/>
  ) 
  :
  (
    <>

        <div className='Third-part'>
            <div className='men-image'></div>
            <div className='men-ul'>
                <ul className='first-ul'>
                    <li onClick={()=>{home()}}>Home</li>
                    <li onClick={()=>{shop()}}>Shop</li>
                    <li>Page</li>
                    <li>Blog</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div className='third-end'>

                <p><FavoriteBorderIcon/></p>
                <p><LocalMallIcon/></p>
                <p><AttachMoneyIcon/></p>
                <p>0.00</p>
 
                
                <button><SearchIcon/></button>
                <Input onChange={(e)=>onChange(e.target.value)} />
            </div> 
        </div>  
    </>
  )
}

export default Header