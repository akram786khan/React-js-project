import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const ClickProps = ({
    Props = 'Shop',
    
}) => {
  return (
    <div className='Prop'>
        <p className='arrow'>
            Home <NavigateNextIcon/> <span>{Props}</span>
        </p>
    </div>
  )
}

export default ClickProps