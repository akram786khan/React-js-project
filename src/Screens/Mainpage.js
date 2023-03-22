import React, { useState, useEffect } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import NavBar from '../Components/NavBar';
import FemaleFashion from './FemaleFashion';
import Header from '../Components/Header';
import Position from '../Components/Position';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import Card from '../Components/Card';
import { Siximage } from '../backend/Siximage';
import Footer from '../Components/Footer';
import { EightData } from '../backend/EightData';
import { useNavigate } from 'react-router-dom'
import { Logout } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const Mainpage = () => {
  const navigate = useNavigate();
  const [search, setsearch] = useState('');
  const [cartData, setcartData] = useState([])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //left button ke liye hai yeh
  const left = () => {
    console.log('===>')
  }


  const filterData = () => {
    let data = EightData.filter((item, index) => {
      return item.title == search;
    })
    setcartData(data)
    console.log('=========data=========>', data);
  }
  useEffect(() => {
    filterData()
    checkLogin();
  }, [search])
  const checkLogin = async () => {
    let token = await localStorage.getItem('Token');
    if (token) {
      navigate('/Dashbord')
    } else {
      navigate('/')
    }
  }
  const LogoutUser = async () => {
    await localStorage.removeItem('Token');
    navigate('/')
  }

  return (
    <div>

      <NavBar />

      <div className='banner'>
        <div className='banner1'>
          <p>
            Free shipping, 30-day return or refund guarantee.
          </p>
        </div>
        <div className='banner2'>
          <div>
            <p onClick={handleOpen}>Logout</p>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 400, height: 400 }}>
                <h2 id="parent-modal-title">You are Sure Logout ...</h2>
                <Button onClick={() => { handleClose() }}>
                  Cancle
                </Button>
                <Button onClick={() => { LogoutUser() }}>
                  OK
                </Button>

              </Box>
            </Modal>
          </div>
          <p>FAQS</p>
          <p>USD</p>
          <p><ArrowDropDownIcon /></p>
        </div>
      </div>
      <Header onChange={setsearch} />
      {/* cHILD TO PARENT (HEADER SE MAINPAGE) */}
      {/* <p>{search}</p> */}

      {
        //  (cartData.length > 0) ?  <Card data={cartData} /> :
        <>
          <div className='Background-image'>
            {/* Quetion 1 :- css me background image de di ab   */}
            <div className='main-hero'>
              <div className='hero-text'>
                <div className='hero-div' >
                  <h5>SUMMER COLLECTION</h5>
                  <h1>Fall - Winter Collection 2030</h1>
                  <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                    commitment to exceptional quality.</p>

                  <button className='btn1'>Shop Now <span> <ArrowForwardIcon /></span> </button>

                  <div className='social-icon'>
                    <p><FacebookOutlinedIcon /></p>
                    <p> <TwitterIcon /></p>
                    <p><PinterestIcon /></p>
                    <p><InstagramIcon /></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='left'>
              <p onClick={() => { left() }}><KeyboardBackspaceIcon /></p>
            </div>
            <div className='right'>
              <EastIcon />
            </div>
          </div>

          <Position />

          <Card />

          <div className='bag'>
            <div className='whitebg'>
              <p>
                Clothings Hot
              </p>
              <span>
                Shoe Collection
              </span>
              <p>
                Accessories
              </p>
            </div>
            <div className='bag-image'>
              <img src='https://preview.colorlib.com/theme/malefashion/img/product-sale.png.webp' />
              <div className='offer'>
                <div>
                  <p>
                    Sale Of
                  </p>
                  <h3>
                    $29.99
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <FemaleFashion />
          <div className='Siximage'>
            <div className='sixchild'>
              {
                Siximage &&
                Siximage.map((item, index) => {
                  return (
                    <div className='imagesix'>
                      <img
                        src={item.image}
                      />
                    </div>
                  )
                })
              }
            </div>
            <div>

            </div>
            <div className='sixchild2'>
              <h2>
                Instagram
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h3>
                #Male_Fashion
              </h3>
            </div>
          </div>

          <div className='h4-h1'>
            <h4>LATEST NEWS</h4>
            <h1>Fashion New Trends</h1>
          </div>

          <div className='threeimage'>
            <div className='imge3'>
              <div>
                <img src='https://preview.colorlib.com/theme/malefashion/img/blog/blog-1.jpg.webp' />
                <div className='main-end'>
                  <p> 16 February 2020</p>
                  <h3>
                    What Curling Irons Are The Best Ones
                  </h3>
                  <span>
                    Read more
                  </span>
                </div>
              </div>
              <div>
                <img src='https://preview.colorlib.com/theme/malefashion/img/blog/blog-2.jpg.webp' />
                <div className='main-end'>
                  <p> 21 February 2020</p>
                  <h3>
                    Eternity Bands Do Last Forever
                  </h3>
                  <span>
                    Read more
                  </span>
                </div>
              </div>
              <div>
                <img src='https://preview.colorlib.com/theme/malefashion/img/blog/blog-3.jpg.webp' />
                <div className='main-end'>
                  <p> 28 February 2020</p>
                  <h3>
                    The Health Benefits Of Sunglasses
                  </h3>
                  <span>
                    Read more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      }


      <Footer />



    </div>
  )
}

export default Mainpage