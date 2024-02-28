import { React, useContext } from 'react';
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { ColorModeContext, tokens } from '../../theme';
import { setNoficationCount } from '../../Slices/notificationSlice';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Topbar = () => {
  // theme config needed
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // get notification Count
  const notificationCount = useSelector((state) => state.notificationState.notificationCount);

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      p={2}
    >
      {/* search bar */}
      <Box display={'flex'}
        backgroundColor={colors.primary[400]}
        borderRadius={'3px'}
      >

      
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={(e) => navigate('/dashboard')}>
          <HomeOutlinedIcon />
        </IconButton>

        {/* CHANGE THEME */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {
            theme.palette.mode === "dark" ? (<DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)
          }
        </IconButton>
        {/* NOTIFICATION */}
        <IconButton onClick={(e) => {
          dispatch(setNoficationCount(0));
          navigate('/notification');
        }}>
          <Badge badgeContent={notificationCount} color={'error'}>
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>

        {/* SETTINGS */}
        {/* <IconButton onClick={(e) => navigate('/settings')}>
          <SettingsOutlinedIcon />
        </IconButton> */}
        {/* PROFILE */}
        <IconButton onClick={(e) => navigate('/profile')}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;