import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import { Button, Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import './App.css'
import { blue } from "@mui/material/colors";


const Landing = () => {


    return (
        < Container className="landing-grid" maxWidth={false} sx={{ backgroundColor: '#ccb0a3', width: '100vw', height: '100vh' }}>
            <Box className="zen-font" sx={{gridColumnStart: 3, gridColumnEnd: 7, textAlign:'center'}}>
                <h1>Elizabeth Barnes Design</h1>
            </Box>
            <Box sx={{ gridRowStart: 3, gridRowEnd: 10, gridColumnStart: 3, gridColumnEnd: 7 }} >
                <img src="http://localhost:5555/uploads/Camino_1.jpg" id="landing-pic" />
            </Box>
            <Box  className= "zen-font" display={"flex"} sx={{ gridRowStart: 10, gridColumnStart: 3, gridColumnEnd:7, justifyContent:'space-between', alignItems:'center' }}>
                <Link to={"/portfolios"}>
                    <Button variant="contained" sx={{backgroundColor: '#4D3E37'}}> View our Work</Button>
                </Link>
                <Link to={"/products"}>
                    <Button variant="contained" sx={{backgroundColor: '#4D3E37'}}> View Furniture</Button>
                </Link>
                <Link to={"/contact-us"}>
                    <Button variant="contained" sx={{backgroundColor: '#4D3E37'}}>
                        Contact Us
                    </Button>
                </Link>
            </Box>
        </Container>
    )
}

export default Landing



