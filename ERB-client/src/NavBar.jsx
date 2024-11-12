import React, { useState } from "react";
import { AppBar, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import './App.css'
const NavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <AppBar sx={{ opacity: '.5', maxWidth: '100%' }}>
            <Box
                className="zen-font"
                sx={{
                    bgcolor: 'black',
                    display: 'flex',
                    justifyContent: 'space-around',
                    paddingRight:'1rem',
                    width:'100%'
                }}
            >
                <Button variant="text" onClick={() => navigate("/")} sx={{ color: "white" }}>
                    Home
                </Button>
                {isMobile ? (
                    <Box sx={{marginLeft:'13rem'}}>
                        <IconButton color="inherit" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
                            <List>
                                <ListItem button onClick={() => { navigate("/contact-us"); handleDrawerToggle(); }}>
                                    <ListItemText primary="Contact" />
                                </ListItem>
                                <ListItem button onClick={() => { navigate("/products"); handleDrawerToggle(); }}>
                                    <ListItemText primary="Furniture" />
                                </ListItem>
                                <ListItem button onClick={() => { navigate("/portfolios"); handleDrawerToggle(); }}>
                                    <ListItemText primary="Portfolio" />
                                </ListItem>
                            </List>
                        </Drawer>
                    </Box>

                ) : (
                    <>
                        <Button variant="text" onClick={() => navigate("/contact-us")} sx={{ color: "white" }}>
                            Contact
                        </Button>
                        <Button variant="text" onClick={() => navigate("/products")} sx={{ color: "white" }}>
                            Furniture
                        </Button>
                        <Button variant="text" onClick={() => navigate("/portfolios")} sx={{ color: "white" }}>
                            Portfolio
                        </Button>
                    </>
                )}
            </Box>
        </AppBar>
    );
};

export default NavBar;