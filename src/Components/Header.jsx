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
        cartDataLength = {},
        onChange
    }
) => {
    const [IsHide, setIsHide] = useState(false);
    const [cnt, setcnt] = useState(5)
    const [wishListLength, setwishListLength] = useState(0)
    const navigate = useNavigate();
    const shop = () => {
        navigate('/Shop');
    }
    setInterval(() => {
        CartLength();
        WishListData();
    }, 500)
    // useEffect(() => {
    //     getLength()
    // }, [])
    const WishListData = async () => {
        let oldData = await localStorage.getItem('WishListData')
        if (oldData) {

            let newData = JSON.parse(oldData)
            //  console.log("=sdsdsd======>>>>>", newData);
            /// cartDataLength = newData.length

            let len = newData.length
            setwishListLength(len)
        }

    }
    const CartLength = async () => {
        let oldData = await localStorage.getItem('AddToCart')
        if (oldData) {

            let newData = JSON.parse(oldData)
            let len = newData.length
            setcnt(5)

        }
    }



    const home = () => {
        navigate('/Dashbord')
    }

    useEffect(() => {
        setTimeout(() => {
            setIsHide(true)
        }, 3000);
    }, IsHide)

    return !IsHide ? (

        <Loader />
    )
        :
        (
            <>

                <div className='Third-part'>
                    <div className='men-image'></div>
                    <div className='men-ul'>
                        <ul className='first-ul'>
                            <li onClick={() => { home() }}>Home</li>
                            <li onClick={() => { shop() }}>Shop</li>
                            <li>Page</li>
                            <li>Blog</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                    <div className='third-end'>

                        <p onClick={() => navigate('/WishList')}><FavoriteBorderIcon /><span style={{ color: "red" }}>{wishListLength}</span></p>
                        <p onClick={() => navigate('/AddToCart')}><LocalMallIcon /><span style={{ color: "red" }}>{cnt}</span></p>
                        <p><AttachMoneyIcon /></p>
                        <p>0.00</p>


                        <button><SearchIcon /></button>
                        <Input onChange={(e) => onChange(e.target.value)} />
                    </div>
                </div>
            </>
        )
}

export default Header