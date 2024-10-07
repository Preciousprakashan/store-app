import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbars.css'
import { Link } from 'react-router-dom';



const Navbars = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#ffffff', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)'}}> {/* Custom background color */}
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 ,color:'#ff4b2b', fontFamily: '"Satisfy", cursive'}}>
            fake-store
          </Typography>

          <Link to={'/'}><Button color="inherit">home</Button></Link>
          <Link to={'/Add'}><Button color="inherit">Products</Button></Link>
          
          {/* <Button color="inherit">Login</Button> */}
          
        </Toolbar>
      </AppBar>
      
    </Box>
  )
}

export default Navbars

