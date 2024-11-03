import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import { Button, Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import './App.css'
import { blue } from "@mui/material/colors";


const Landing = () => {


    return (
        < Container className="landing-grid" maxWidth={false} sx={{ backgroundColor: '#qqqq', width: '100vw', height: '100vh' }}>
            <Box sx={{ backgroundColor: "aliceblue", gridRowStart: 2, gridRowEnd: 9, gridColumnStart: 3, gridColumnEnd: 7 }}>
                <img src="http://localhost:5555/uploads/camino_4.jpg" id="landing-pic" />
            </Box>
            <Box display={"flex"} sx={{ gridRowStart: 9, gridColumnStart: 3, gridColumnEnd:7, justifyContent:'space-between', alignItems:'center' }}>
                <Link to={"/portfolios"}>
                    <Button variant="contained"> View our Work</Button>
                </Link>
                <Link to={"/products"}>
                    <Button variant="contained"> View Furniture</Button>
                </Link>
                <Link to={"/contact-us"}>
                    <Button variant="contained">
                        Contact Us
                    </Button>
                </Link>
            </Box>
        </Container>
    )
}

export default Landing



