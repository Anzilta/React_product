import React from 'react'
import './navbar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      
        
      <AppBar position="static">
      <div className='appbar'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            
          </IconButton>
          <div className='appbarhead'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Products
          </Typography>
          </div>
          <div className='appbartext'>
          <Button color="inherit" ><Link to='/' style={{textDecoration:'none' ,color:'white'}}>Home</Link></Button>
          <Button color="inherit"><Link to='/add' style={{textDecoration:'none' ,color:'white'}}>ADD PRODUCT</Link></Button>
          </div>
        </Toolbar>
            </div>
      </AppBar>
      
    </Box>
    </div>
  )
}

export default Navbar