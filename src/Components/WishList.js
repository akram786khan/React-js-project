
import { width } from "@mui/system";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import { AiFillDelete } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import Loader from './Loader'
function WishList() {
    const [WishListData, setWishListData] = useState([])
    const [cartData, setcartData] = useState([]);
    const [isLoader, setisLoader] = useState(true);
    useEffect(() => {
        getWishListProduct();
    }, []);

    const getWishListProduct = async () => {
        let tok = await localStorage.getItem("Token");
        let token = await JSON.parse(tok);
        try {

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
                setisLoader(false)
                setcartData(data.message);
                // setcnt(data.message.length)
                console.log('====cartData===length>', cartData.length)
            }
        } catch (err) {
            if (err) {
                toast.error("Please check internet connection...")
                setisLoader(false)
            }
            console.log("==========>>", err)
        }


    };

    const DeleteData = async (item) => {
        console.log("====item=====>", item)
        let tok = await localStorage.getItem("Token");
        let token = await JSON.parse(tok);
        let data = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },

        };
        try {
            let results = await fetch(
                `https://light-pumps-seal.cyclic.app/DreamCoder/api/DeleteWishListProduct/${item._id}`,
                data,
            );

            let res = await results.json();
            let resdata = await res;
            if (resdata) {
                toast.success("Product Successfuly Deleted ...")
                getWishListProduct()
            }
            console.log("====resdata ====>", resdata);
        } catch (err) {
            console.log("===err===>", err)
        }
    }

    // useEffect(() => {
    //     getWishListData()
    //     setTimeout(() => {
    //         getWishListData()
    //     }, 1000)

    // }, [WishListData])
    // const getWishListData = async () => {
    //     let data = await localStorage.getItem('WishListData')
    //     let dataparse = await JSON.parse(data)
    //     setWishListData(dataparse)
    //     console.log("====WishListData======>", WishListData);
    // }
    return (
        // <div>
        //     {
        //         WishListData.map((item, index) => {
        //             return (
        //                 <div style={{ border: '1px solid red', height: '30vh', width: "99%" }}>
        //                     <img src={item.image} />
        //                 </div>
        //             )
        //         })
        //     }
        // </div>
        <div>
            <ToastContainer />
            <Header />
            <h2 style={{ textAlign: 'center' }}>WishList Products</h2>
            {/* <Header cartDataLength={cartData.length} /> */}
            {
                isLoader ? <Loader /> : ""
            }

            {cartData &&
                cartData.map((item, index) => {
                    return (
                        <>
                            <div style={{ display: 'flex', justifyContent: "center", width: "100%" }}>
                                <div style={{ width: "80%", display: "flex", marginTop: "20px", justifyContent: "center" }}>
                                    <div style={{ width: "100%" }}>

                                        <img style={{ width: '70px', height: '70px' }} src={item.img} />
                                    </div>
                                    <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>{item.title}</div>

                                    <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>{item.price}</div>

                                    <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>{item.reting}</div>

                                    <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>{item.size}</div>

                                    <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}><AiFillDelete onClick={() => DeleteData(item)} /></div>

                                </div>
                            </div>
                        </>
                    )
                })
            }
            <h1>
                {

                }
            </h1>
        </div>
    )
}

export default WishList
