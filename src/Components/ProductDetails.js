import React, { useState, useEffect } from 'react'
import { json, useLocation } from 'react-router-dom'
import Button from './Button';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
function ProductDetails() {
    const { state } = useLocation();

    const [cartandwishlistDataLength, setcartandwishlistDataLength] = useState({
        cartlength: 0,
        wishListlength: 0
    })
    console.log("======sdds=d====>>", state)
    useEffect(() => {
        getlength()
    }, [])
    const getlength = async () => {
        // let oldData = await localStorage.getItem('AddToCart')
        // let newData = JSON.parse(oldData)
        // setcartDataLength(newData.length)
    }
    const AddtoCart = async (item) => {
        // let arr = []
        // let oldData = await localStorage.getItem('AddToCart')
        // let newData = JSON.parse(oldData)
        // if (!oldData) {
        //     arr.push(item)
        // } else {
        //     arr = [...newData]
        //     arr.push(item)
        // }
        // setcartDataLength(arr.length)

        // await localStorage.setItem('AddToCart', JSON.stringify(arr))
        let tok = await localStorage.getItem('Token')
        let token = await JSON.parse(tok)
        let body1 = {
            "color": item.color,
            "dis": item.dis,
            "img": item.img,
            "price": item.price,
            "qun": item.qun,
            "reting": item.reting,
            "size": item.size,
            "title": item.title
        }
        let body = JSON.stringify(body1);
        console.log("=====body-===>", body)
        let res = await fetch("https://light-pumps-seal.cyclic.app/DreamCoder/api/addCartProduct", {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                // 'Accept-Language': strings.getLanguage(),
            },
            body,
            method: 'POST',
        });
        let resData = res.json();
        let data = await resData;
        let obj = {
            cartlength: cartandwishlistDataLength.cartlength + 1,
            wishListlength: cartandwishlistDataLength.wishListlength + 1

        }
        setcartandwishlistDataLength(obj)
        if (data.status == true) {
            toast.success("AddToCart Product...")
        }


    }
    const WishList = async (item) => {
        // let arr = []
        // let oldData = await localStorage.getItem('WishListData')
        // let newData = JSON.parse(oldData)
        // if (!oldData) {
        //     arr.push(item)
        // } else {
        //     arr = [...newData]
        //     arr.push(item)
        // }
        //  setcartDataLength(arr.length)

        //   await localStorage.setItem('WishListData', JSON.stringify(arr))
        let tok = await localStorage.getItem('Token')
        let token = await JSON.parse(tok)
        let body1 = {
            "color": item.color,
            "dis": item.dis,
            "img": item.img,
            "price": item.price,
            "reting": item.reting,
            "size": item.size,
            "title": item.title
        }
        let body = JSON.stringify(body1);
        console.log("=====body-===>", body)
        let res = await fetch("https://light-pumps-seal.cyclic.app/DreamCoder/api/addWishListProduct", {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                // 'Accept-Language': strings.getLanguage(),
            },
            body,
            method: 'POST',
        });
        let resData = res.json();
        let data = await resData;
        //setcartDataLength(cartDataLength + 1)
        let obj = {
            cartlength: cartandwishlistDataLength.cartlength + 1,
            wishListlength: cartandwishlistDataLength.wishListlength + 1

        }
        setcartandwishlistDataLength(obj)
        if (data.status == true) {
            toast.success("WishList Product...")
        }


    }
    return (
        <>
            <Header cartDataLength={cartandwishlistDataLength} />

            <div style={{ height: '100vh', display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ToastContainer />
                <div style={{ width: "99.8%", height: '80vh', border: "1px solid red", display: "flex", justifyContent: "space-around" }}>
                    <div style={{ width: "38%", height: '80vh', border: "1px solid black" }}>
                        <img src={state.item.img} style={{ width: "100%", height: '80vh' }} />
                    </div>
                    <div style={{ width: "55%", height: '80vh', border: "1px solid blue", padding: '60px', display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div style={{ height: '60vh', width: "60%", border: "1px solid red" }}>
                            <p style={{ fontSize: "20px", margin: "15px" }}>Title :{state.item.title}</p>
                            <p style={{ fontSize: "20px", margin: "15px" }}>Price :{state.item.price}</p>
                            <p style={{ fontSize: "20px", margin: "15px" }}>Dis:{state.item.dis}</p>
                            <p style={{ fontSize: "20px", margin: "15px" }}>Reating:{state.item.reting}</p>
                            <p style={{ fontSize: "20px", margin: "15px" }}>Color:{state.item.color}</p>
                            <p style={{ fontSize: "20px", margin: "15px" }}>size:{state.item.size}</p>
                            <p style={{ fontSize: "20px", margin: "15px" }}>qun:{state.item.qun}</p>

                            <div >
                                <Button title='WishList' onClick={() => WishList(state.item)} />
                                <Button title='AddToCart' onClick={() => AddtoCart(state.item)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
