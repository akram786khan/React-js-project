import React from 'react'

const JavaScript = () => {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        arr.push({ cnt: i })
    }
    let srt = "DreamCoder"
    let newStr = "";
    for (let i = srt.length - 1; i >= 0; i--) {
        newStr += srt[i]
    }
    return (
        <div>
            {
                arr && arr.map((item, index) => {
                    return (
                        <p style={{ fontSize: "50px" }}>{item.cnt}</p>
                    )
                })
            }
            <p>{newStr}</p>
        </div>
    )
}

export default JavaScript