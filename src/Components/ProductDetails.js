import React, { useState, useEffect } from 'react'
import { json, useLocation } from 'react-router-dom'
import Button from './Button';
import Header from './Header';
function ProductDetails() {
    const { state } = useLocation();

    const [cartDataLength, setcartDataLength] = useState(0)
    console.log("======sdds=d====>>", state)
    useEffect(() => {
        getlength()
    }, [])
    const getlength = async () => {
        let oldData = await localStorage.getItem('AddToCart')
        let newData = JSON.parse(oldData)
        setcartDataLength(newData.length)
    }
    const AddtoCart = async (item) => {
        let arr = []
        let oldData = await localStorage.getItem('AddToCart')
        let newData = JSON.parse(oldData)
        if (!oldData) {
            arr.push(item)
        } else {
            arr = [...newData]
            arr.push(item)
        }
        setcartDataLength(arr.length)

        await localStorage.setItem('AddToCart', JSON.stringify(arr))
    }
    const WishList = async (item) => {
        let arr = []
        let oldData = await localStorage.getItem('WishListData')
        let newData = JSON.parse(oldData)
        if (!oldData) {
            arr.push(item)
        } else {
            arr = [...newData]
            arr.push(item)
        }
        //  setcartDataLength(arr.length)

        await localStorage.setItem('WishListData', JSON.stringify(arr))
    }
    return (
        <>
            <Header cartDataLength={cartDataLength} />
            <h1 style={{ textAlign: "center" }}>{cartDataLength}</h1>
            <div style={{ height: '100vh', display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "99.8%", height: '80vh', border: "1px solid red", display: "flex", justifyContent: "space-around" }}>
                    <div style={{ width: "38%", height: '80vh', border: "1px solid black" }}>
                        <img src={state.item.image} style={{ width: "100%", height: '80vh' }} />
                    </div>
                    <div style={{ width: "55%", height: '80vh', border: "1px solid blue", padding: '60px', display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div style={{ height: '50vh', width: "60%", border: "1px solid red" }}>
                            <p style={{ fontSize: "20px", margin: "15px" }}>Title :{state.item.title}</p>
                            <p style={{ fontSize: "20px", margin: "15px" }}>Price :{state.item.Price}</p>
                            <p style={{ fontSize: "20px", margin: "15px" }}>Dis: :{state.item.dis}</p>
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
