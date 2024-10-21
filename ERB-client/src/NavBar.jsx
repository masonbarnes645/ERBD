import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AppBar from "@mui/material/AppBar";
import './App.css';
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";


const theme = createTheme({
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    fontSize: "18px",
                    color: "aliceblue",
                    marginRight:90,
                    width:150
                    
                }
            }
        }
    }   
}
)

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <Container fixed>
        <AppBar>
            <Box display="flex" justifyContent="space-between" sx={{paddingY:2}}>
            <img src="src/assets/Header_logo.png" alt="header" />
                <ThemeProvider theme={theme}>
                <Box sx={{paddingTop:2}}>
                    <Button variant="text" onClick={() => navigate("/")} className="navbutton"> Home </Button>
                    <Button variant="text" onClick={() => navigate("/products")} className="navbutton"> Products </Button>
                    <Button variant="text" onClick={() => navigate("/portfolios")} className="navbutton"> Portfolio </Button>
                </Box>
                </ThemeProvider>
            </Box>
        </AppBar>
        </Container>
    )
}


export default NavBar   