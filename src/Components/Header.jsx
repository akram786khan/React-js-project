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
    const [cnt, setcnt] = useState(0)
    const [wishListLength, setwishListLength] = useState(0)
    const navigate = useNavigate();
    const shop = () => {
        navigate('/Shop');
    }
    // setInterval(() => {
    //     getCartProduct();
    //     //WishListData();
    // }, 1000)
    useEffect(() => {
        // setInterval(() => {
        getCartProduct()
        //  }, 1000)
        WishListData()

    }, [cartDataLength])
    const WishListData = async () => {
        // let oldData = await localStorage.getItem('WishListData')
        // if (oldData) {

        //     let newData = JSON.parse(oldData)
        //     //  console.log("=sdsdsd======>>>>>", newData);
        //     /// cartDataLength = newData.length

        //     let len = newData.length
        //     setwishListLength(len)
        // }
        console.log("=====dsdsdsd=====>>>>>>")
        let tok = await localStorage.getItem("Token");
        let token = await JSON.parse(tok);
        let res = await fetch(
            "https://light-pumps-seal.cyclic.app/DreamCoder/api/getWishListProduct",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                method: "GET",
            }
        );

        let resData = res.json();
        let data = await resData;
        console.log("=========data===>", data);

        if (data) {
            setwishListLength(data.message.length);
            //   console.log('====cartData===>', cartData)
        }


    }
    // const CartLength = async () => {
    //     let oldData = await localStorage.getItem('AddToCart')
    //     if (oldData) {

    //         let newData = JSON.parse(oldData)
    //         let len = newData.length
    //         setcnt(5)

    //     }
    // }



    const home = () => {
        navigate('/Dashbord')
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsHide(true)
    //     }, 3000);
    //     // getCartProduct()
    // }, IsHide)

    const getCartProduct = async () => {
        console.log("=====dsdsdsd=====>>>>>>")
        let tok = await localStorage.getItem("Token");
        let token = await JSON.parse(tok);
        let res = await fetch(
            "https://light-pumps-seal.cyclic.app/DreamCoder/api/getCartProduct",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                method: "GET",
            }
        );

        let resData = res.json();
        let data = await resData;
        console.log("=========data===>", data);

        if (data) {
            setcnt(data.message.length);
            //   console.log('====cartData===>', cartData)
        }
    };
    return (
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