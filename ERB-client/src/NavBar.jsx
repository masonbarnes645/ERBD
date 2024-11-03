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
        <AppBar  sx={{maxWidth:'100%'}}>
            <Box
                className= "zen-font"
                sx={{
                    bgcolor: '#4D3E37',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 1rem'
                }}
            >
                <Button variant="text" onClick={() => navigate("/")} sx={{ color: "white" }}>
                    BrandName
                </Button>
                {isMobile ? (
                    <>
                        <IconButton color="inherit" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
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
                    </>
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
