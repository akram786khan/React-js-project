import React from 'react'
import { Input } from '@mui/material'
const Footer = () => {
  return (
    
    <div className='main-footer'>
    <div>
      <h1><span>Male</span>-Fashion</h1>
      <p>The customer is at the heart of our unique business model, which includes design.</p>
    </div>
    <div>
      <h3>SHOPPING</h3>
        <p>Clothing Store
            Trending Shoes
            Accessories
            Sale
        </p>
    </div>
    <div>
          <h3>SHOPPING</h3>
          <p>Contact Us
              Payment Methods
              Delivary
              Return & Exchanges</p>
    </div>
    <div>
          <h3>NEWLETTER</h3>
          <p>Be the first to know about new arrivals, look books, sales & promos!</p>
          
          <div className='newletter'>
          <Input />
          </div>
    </div>
</div>
  )
}

export default Footer