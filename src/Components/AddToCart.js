import React, { useEffect, useState } from 'react'
import Header from './Header';
function AddToCart() {
    const [cartDataLength, setcartDataLength] = useState(0)
    const [cartData, setcartData] = useState([])
    useEffect(() => {
        getCartProduct()
    }, [])
    const getCartProduct = async () => {
        let tok = await localStorage.getItem('Token')
        let token = await JSON.parse(tok)
        let res = await fetch("https://light-pumps-seal.cyclic.app/DreamCoder/api/getCartProduct", {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                // 'Accept-Language': strings.getLanguage(),
            },
            method: 'GET',
        });
        let resData = res.json();
        let data = await resData;
        console.log("=========data===>", data)
        if (data) {
            setcartData(data.message)
        }

    }

    return (
        <div>
            <Header cartDataLength={cartData.length} />
            {
                cartData.map((item, index) => {
                    return (

                        <div>{item.title}</div>
                    )
                })
            }
        </div>
    )
}

export default AddToCart
