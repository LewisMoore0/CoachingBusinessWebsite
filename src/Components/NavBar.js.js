import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Link, MenuItem } from '@mui/material';
import LogoImage from '../images/file.png'

export function NavBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ p:1, backgroundColor: '#3a3c3d' }}>
        <Toolbar>
        <img src={LogoImage} height={100} width={100}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, pl: 1 }}>
            <Link underline='none' color='inherit' href='/'>  Coaching Business Name </Link>
          </Typography>
          <Link color='inherit' underline="none" href='/' sx={{ p:1 }}>Home</Link>
          <Link color='inherit' underline="none" href='/about' sx={{ p:1 }}>About</Link>
          <Link color='inherit' underline="none" href='/services' sx={{ p:1 }}>Services</Link>

          <Link sx={{ p:1 }} color='inherit' href='/contact' underline='none'>Get in touch!</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

