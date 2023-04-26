import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/actions';

const Header = () => {

    const { currentUser } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const handleAuth = () => {
      if (currentUser) {
        dispatch(logoutInitiate());
      }
  
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#36403E'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo App
          </Typography> 
          <Button color="inherit" onClick={handleAuth}>Logout</Button>
          </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header