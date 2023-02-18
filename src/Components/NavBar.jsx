import React from 'react';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
const NavBar = () => {
  return (
    <>
    <div className='header'>
            <div className='header1'>
                <h1>COLORLIB</h1>
                <h3>MALEFASHION</h3>
            </div>
            <div className='header2'>
                <div>
                    <h3><ScreenshotMonitorIcon style={{fontSize:'40px',borderRight:'2px solid black'}}/></h3>
                    <h3><TabletMacIcon style={{fontSize:'40px',borderRight:'2px solid black'}}/></h3>
                    <h3><StayCurrentPortraitIcon style={{fontSize:'40px',borderRight:'2px solid black'}}/></h3>
                    <h3><AddShoppingCartIcon style={{fontSize:'40px',}}/> </h3>
                    <h3> <CloseIcon style={{fontSize:'40px'}}/></h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar