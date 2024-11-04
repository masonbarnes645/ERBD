import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import { Button, Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import './App.css'
import { blue } from "@mui/material/colors";


const Landing = () => {


    return (
        < Container className="landing-grid" maxWidth={false} sx={{  width: '100vw', height: '100vh' }}>
            <Box className="zen-font" sx={{
                gridColumnStart: 4, gridColumnEnd: 14, textAlign: 'center' }}>
                <h1>Elizabeth Barnes Design</h1>
            </Box>
            <Box sx={{ gridRowStart: 2, gridRowEnd: 10, gridColumnStart: 5, gridColumnEnd: 13, borderStyle:'solid' }} >
                <img src="http://localhost:5555/uploads/Camino_1.jpg" id="landing-pic" />
            </Box>
            <Box className="zen-font" display={"flex"} sx={{
                gridRowStart: 10,
                gridColumnStart: 5,
                gridColumnEnd: 13,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexFlow: { xs: "column", sm: 'row' }
            }}>
                <Link to={"/portfolios"}>
                    <Button  variant="contained" size="large" sx={{ backgroundColor: '#36454F', marginY: { xs: '10px', sm: '0px' } }}> View our Work</Button>
                </Link>
                <Link to={"/products"}>
                    <Button variant="contained" size="large"sx={{ backgroundColor: '#36454F', marginBottom: { xs: '10px', sm: '0px' } }}> View Furniture</Button>
                </Link>
                <Link to={"/contact-us"}>
                    <Button variant="contained" size="large"sx={{ backgroundColor: '#36454F' }}>
                        Contact Us
                    </Button>
                </Link>
            </Box>
        </Container>
    )
}

export default Landing



