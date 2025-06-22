import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;
const navItems = [
    ['Expertise', 'expertise', 'internal'], 
    ['History', 'history', 'internal'], 
    ['Projects', 'projects', 'internal'], 
    ['Contact', 'contact', 'internal'], 
    ['Blog', '/blog', 'external']
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    if (location.pathname !== '/') {
        window.location.href = '/#' + section;
    } else {
        const targetElement = document.getElementById(section);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.error(`Element with id "${section}" not found`);
        }
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon />Menu</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            {item[2] === 'internal' ? (
              <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item[1])}>
                <ListItemText primary={item[0]} />
              </ListItemButton>
            ) : (
              <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={item[1]}>
                <ListItemText primary={item[0]} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const isDark = mode === 'dark';

  const navbarContainerStyle = {
    position: 'fixed' as const,
    top: '20px',
    left: '20px',
    right: '20px',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
  };

  const navbarStyle = {
    backgroundColor: isDark 
      ? 'rgba(15, 23, 42, 0.25)' 
      : 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '20px',
    border: isDark 
      ? '1px solid rgba(255, 255, 255, 0.1)' 
      : '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: scrolled 
      ? (isDark 
          ? '0 8px 32px rgba(0, 0, 0, 0.4)' 
          : '0 8px 32px rgba(0, 0, 0, 0.1)')
      : (isDark 
          ? '0 4px 16px rgba(0, 0, 0, 0.2)' 
          : '0 4px 16px rgba(0, 0, 0, 0.05)'),
    transition: 'all 0.3s ease',
    maxWidth: '1200px',
    width: '100%',
  };

  const toolbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    minHeight: '60px',
  };

  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  };

  const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const navButtonStyle = {
    color: isDark ? '#f1f5f9' : '#1e293b',
    backgroundColor: 'transparent',
    borderRadius: '12px',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: '500',
    textTransform: 'none' as const,
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: isDark 
        ? 'rgba(255, 255, 255, 0.1)' 
        : 'rgba(0, 0, 0, 0.05)',
      transform: 'translateY(-1px)',
    },
  };

  const themeToggleStyle = {
    color: isDark ? '#f1f5f9' : '#1e293b',
    backgroundColor: isDark 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.05)',
    borderRadius: '12px',
    padding: '8px',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: isDark 
        ? 'rgba(255, 255, 255, 0.2)' 
        : 'rgba(0, 0, 0, 0.1)',
      transform: 'scale(1.05)',
    },
  };

  const mobileMenuButtonStyle = {
    color: isDark ? '#f1f5f9' : '#1e293b',
    backgroundColor: isDark 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.05)',
    borderRadius: '12px',
    padding: '8px',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: isDark 
        ? 'rgba(255, 255, 255, 0.2)' 
        : 'rgba(0, 0, 0, 0.1)',
    },
  };

  const logoStyle = {
    fontFamily: '"Inter", sans-serif',
    fontSize: '18px',
    fontWeight: '600',
    background: 'linear-gradient(45deg, #8b5cf6, #a855f7, #c084fc, #8b5cf6)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'gradientShift 4s ease-in-out infinite',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    letterSpacing: '1px',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  };

  const logoContainerStyle = {
    position: 'absolute' as const,
    left: '50%',
    transform: 'translateX(-50%)',
    display: { xs: 'block', sm: 'none' },
  };

  const logoDesktopStyle = {
    ...logoStyle,
    display: { xs: 'none', sm: 'block' },
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* CSS Animation for Gradient */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      
      {/* Main Navbar */}
      <Box sx={navbarContainerStyle}>
        <Box sx={navbarStyle}>
          <Toolbar sx={toolbarStyle}>
            {/* Left Section - Logo (Desktop) & Mobile Menu */}
            <Box sx={leftSectionStyle}>
              {/* Desktop Logo - Left Side */}
              <Typography 
                sx={logoDesktopStyle}
                onClick={() => window.location.href = '/'}
              >
                AXJH03
              </Typography>
              
              {/* Mobile Menu Button */}
              <IconButton
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{ ...mobileMenuButtonStyle, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Center Section - Navigation Items (Desktop Only) */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: '8px' }}>
              {navItems.map((item) => (
                item[2] === 'internal' ? (
                  <Button 
                    key={item[0]} 
                    onClick={() => scrollToSection(item[1])} 
                    sx={navButtonStyle}
                  >
                    {item[0]}
                  </Button>
                ) : (
                  <Button 
                    key={item[0]} 
                    component={Link} 
                    to={item[1]} 
                    sx={navButtonStyle}
                  >
                    {item[0]}
                  </Button>
                )
              ))}
            </Box>

            {/* Right Section - Theme Toggle & Mobile Logo */}
            <Box sx={rightSectionStyle}>
              {/* Mobile Logo - Centered */}
              <Typography 
                sx={logoContainerStyle}
                onClick={() => window.location.href = '/'}
              >
                AXJH03
              </Typography>
              
              <IconButton
                onClick={() => modeChange()}
                sx={themeToggleStyle}
              >
                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          </Toolbar>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              backgroundColor: isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: 'none',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;