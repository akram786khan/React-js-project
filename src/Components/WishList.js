import React, { useState, useEffect } from 'react'

function WishList() {
    const [WishListData, setWishListData] = useState([])
    useEffect(() => {
        getWishListData()
        setTimeout(() => {
            getWishListData()
        }, 1000)

    }, [WishListData])
    const getWishListData = async () => {
        let data = await localStorage.getItem('WishListData')
        let dataparse = await JSON.parse(data)
        setWishListData(dataparse)
        console.log("====WishListData======>", WishListData);
    }
    return (
        <div>
            {
                WishListData.map((item, index) => {
                    return (
                        <div style={{ border: '1px solid red', height: '30vh', width: "99%" }}>
                            <img src={item.image} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default WishList
