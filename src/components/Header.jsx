import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

function Header() {
    const projectInfo = "Welcome to our Resume Builder! Whether you’re applying for your first job or upgrading your professional profile, our tool helps you create a clean and well-structured resume. Just fill in your details and get a polished resume instantly."

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img width={'30px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2fT9DttEaR0RmvSWlK9byLIRygfWocHvlzg&s" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none'>R-Builder</Link>
          </Typography>
          <Tooltip title={projectInfo}>
            <Button color="inherit">Login</Button>
          </Tooltip>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header