import React,{useEffect} from "react";
import { EightData } from "../backend/EightData";
import { useState } from "react";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { Icons } from "../backend/Icons";

const Card = ({
  searchData,data=[]
}) => {
  // const [heartUpdate, setheartUpdate] = useState(false);
  const [Listdata,setListdata]=useState([])

  console.log('--------->',Listdata)
    // const [search,setsearch]=useState('');
    // const setData = ()=>{
    //   setListdata(EightData)
    //   let filterData = Listdata.filter((item,index) => {
    //     return item.Price == searchData;
            
    // })
    // if (filterData) {
    //      setListdata(filterData)
    // }
    // else {
    //     setListdata(EightData)
    // }
    // }


const setData=()=>{
  if(data.length > 0){
    setListdata(data);

  }
  else{
    setListdata(EightData)
  }

}

 useEffect(()=>{
  setData()
    console.log('=============>',searchData)
 },[searchData])

  const heart = (index) => {
    console.log("=========>")
    // let arr = [...ListData];
    // arr[index].Icon = arr[index].Icon == Icon.heartRed ? Icon.heartBlank : Icon.heartRed;
    // setListData(arr);
  };

  return (
    <>
      <div className="card-container">
        <div className="card">
          {
          Listdata &&
            Listdata.map((item, index) => {
              return (
                <div className="card1">
                  <div>
                    <img
                      src={item.image}
                      style={{
                        width: "100%",
                        borderRadius: "20px 20px 0px 0px",
                      }}
                    />
                  </div>

                  <div className="title">
                    <p
                      style={{
                        color: "grey",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Title :
                    </p>
                    <p style={{ textDecoration: "underline" }}>{item.title}</p>
                  </div>

                  <div className="flex">
                    <p
                      style={{
                        color: "black",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Price :
                    </p>
                    <p style={{ color: "grey" }}>{item.Price}</p>
                  </div>

                  <div className="heart-blank">
                    <p onClick={() => {heart(index)}} >
                       
                    </p>
                  </div>

                  <div>
                    <div className="fasbtn">
                      <Button variant="contained" disableElevation>
                         <AddShoppingCartIcon/> Add List
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Card;
