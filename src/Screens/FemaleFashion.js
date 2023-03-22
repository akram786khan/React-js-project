import React, { useEffect, useState } from 'react'

const FemaleFashion = () => {
    const [Categories, setCategories] = useState([])
    const [productList, setproductList] = useState([])
    const [color, setcolor] = useState("black")
    useEffect(() => {
        getAllCategories();
    }, [])
    const getAllCategories = async () => {
        try {
            let res = await fetch('https://charming-calf-pea-coat.cyclic.app/api/AllCategories')
            let response = res.json()
            let data = await response
            setCategories(data.data.Categories)

            setproductList(data.data.Categories[0].data[0].Productlist)
            console.log("===data==>", productList)

        } catch (err) {
            console.log("err===>", err)
        }
    }
    const changeCategories = (item, index) => {
        document.getElementById(index).style.color = "red"
        console.log("changeCategories==>", item)
        setproductList(item.data[0].Productlist)


    }
    const changecolor = (item, index) => {
        console.log("===1111===dsdssds=d====sds->>", index);
        document.getElementById(index).style.color = "red"
    }

    const onMouseOutcolor = (item, index) => {
        console.log("======dsdssds=d====sds->>", index);
        // document.getElementById(index).style.color = "black"
    }
    return (
        <div>
            <h1 style={{ textAlign: "center", margin: 50 }}>Female Fashion</h1>
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "20px" }}>
                <div style={{ width: '80%', display: "flex", justifyContent: "space-around" }}>
                    {
                        Categories && Categories.map((item, index) => {
                            return (
                                <h1 id={index} onMouseOut={() => onMouseOutcolor(item, index)} onClick={() => changeCategories(item, index)} style={{ cursor: "pointer" }} onMouseOver={() => changecolor(item, index)} >{item.title}</h1>

                            )
                        })
                    }
                </div>
            </div>
            <div>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <div style={{ width: '80%', display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                        {
                            productList && productList.map((item, index) => {
                                return (
                                    <div style={{ margin: 20 }}>
                                        <img src={item.Image[0]} style={{ height: '300px', width: '300px' }} />
                                        <p style={{ width: "70%" }}>{item.title}</p>
                                        <div style={{ display: "flex", justifyContent: "space-between", width: "50%" }}>

                                            <div>

                                                <del>{"₹ " + item.sellingPrice}</del> <p>{"₹ " + item.disPrice}</p>
                                            </div>
                                            <div>
                                                <p>{item.disPrsent}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FemaleFashion