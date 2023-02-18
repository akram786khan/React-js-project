import Button from '@mui/material/Button';
import React from 'react'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {TwelveImage} from '../backend/TwelveImage';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Images = () => {
  return (
    <div className='twelve'>
        <div className='FLEX'>
            <div >
                    <Accordion >
                        <AccordionSummary    
                            expandIcon={<KeyboardArrowUpIcon/> }
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{width:'100%',height:'4px'}}
                        >
                            <Typography>CATEGORIES</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{borderBottom:'2px solid grey'}}>
                            <Typography>
                                Men (20)
                            </Typography>
                            <Typography>
                                Women (20)
                            </Typography>
                            <Typography>
                                Bags (20)
                            </Typography>
                            <Typography>
                                Clothing (20)
                            </Typography>
                            <Typography>
                                Shoes (20)
                            </Typography>
                            <Typography>
                            Accessories (20)
                            </Typography>
                            <Typography>
                                Kids (20)
                            </Typography>
                            <Typography>
                                about (20)
                            </Typography>
                            <Typography>
                                home (20)
                            </Typography>
                            <Typography>
                                about (20)
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    </div>

                    <div style={{marginTop:'10px'}} >
                    <Accordion >
                        <AccordionSummary    
                            expandIcon={<KeyboardArrowUpIcon/> }
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{width:'100%',height:'4px'}}
                        >
                            <Typography>BRANDING</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{borderBottom:'2px solid grey'}}>
                            <Typography>
                                  Louis Vuitton
                            </Typography>
                            <Typography>
                            Chanel
                            </Typography>
                            <Typography>
                            Hermes
                            </Typography>
                            <Typography>
                            Gucci
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    </div>

                    <div style={{marginTop:'10px'}} >
                    <Accordion >
                        <AccordionSummary    
                            expandIcon={<KeyboardArrowUpIcon/> }
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{width:'100%',height:'4px'}}
                        >
                            <Typography>FILTER PRICE</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{borderBottom:'2px solid grey'}}>
                            <Typography>
                            $0.00 - $50.00
                            </Typography>
                            <Typography>
                            $50.00 - $100.00            
                            </Typography>
                            <Typography>
                            $100.00 - $150.00
                            </Typography>
                            <Typography>
                            Gucci$150.00 - $200.00
                            </Typography>
                            <Typography>
                            $200.00 - $250.00
                            </Typography>
                            <Typography>
                            250.00+
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    </div>

                    <div style={{marginTop:'10px'}} >
                    <Accordion >
                        <AccordionSummary    
                            expandIcon={<KeyboardArrowUpIcon/> }
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{width:'100%',height:'4px'}}
                        >
                            <Typography>SIZE</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            XS
                            </Typography>
                            <Typography>
                            S           
                            </Typography>
                            <Typography>
                            M
                            </Typography>
                            <Typography>
                            XL
                            </Typography>
                            <Typography>
                            2XL
                            </Typography>
                            <Typography>
                            XXL
                            </Typography>
                            <Typography>
                            3XL
                            </Typography>
                            <Typography>
                            4XL
                            </Typography>
                            
                        </AccordionDetails>
                    </Accordion>
                    </div>

                        <div style={{marginTop:'10px'}} >
                    <Accordion >
                        <AccordionSummary    
                            expandIcon={<KeyboardArrowUpIcon/> }
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{width:'100%',height:'4px'}}
                        >
                            <Typography>COLORS</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            
                            </Typography>
                            <Typography>
                                      
                            </Typography>
                            <Typography>
                            
                            </Typography>
                            <Typography>
                            
                            </Typography>
                            <Typography>
                            
                            </Typography>
                            <Typography>
                            
                            </Typography>
                            <Typography>
                            
                            </Typography>                            
                        </AccordionDetails>
                    </Accordion>
                    </div>
        </div>
        <div className='imageflex'>
            {
                TwelveImage&&
                TwelveImage.map((item,index)=>{
                    return(
                        <div className='imageuper'>
                            <img src={item.image}  alt="" />
                            <div>
                            <FavoriteBorderIcon/>
                            </div>
                            <div><h2>Title:</h2><p>{item.title}</p></div>
                            <div><h4>Price :</h4><p>{item.Price}</p></div>
                            <Button variant="contained" disableElevation>
                               <AddShoppingCartIcon/> Add List
                             </Button>

                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Images