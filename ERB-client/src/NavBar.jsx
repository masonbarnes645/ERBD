import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AppBar from "@mui/material/AppBar";
import './App.css';
import { Box, Container, createTheme, ThemeProvider, Typography } from "@mui/material";


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
            <Box display="flex" justifyContent="space-between" sx={{paddingY:3}}>
            <img src="src/assets/logo.png" alt="header" id="logo"/>
            <Typography variant="h3" component={'h1'} sx={{marginTop:1}}>Elizabeth Barnes Design</Typography>
                <ThemeProvider theme={theme}>
                <Box sx={{paddingY:2, marginLeft:5  , display:'flex'}}>
                    <Button variant="text" onClick={() => navigate("/")} className="navbutton"> Contact </Button>
                    <Button variant="text" onClick={() => navigate("/products")} className="navbutton"> Furniture </Button>
                    <Button variant="text" onClick={() => navigate("/portfolios")} className="navbutton"> Portfolio </Button>
                </Box>
                </ThemeProvider>
            </Box>
        </AppBar>
        </Container>
    )
}


export default NavBar   