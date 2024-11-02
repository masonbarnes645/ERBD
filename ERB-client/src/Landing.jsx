import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import { Button, Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import './App.css'


const Landing = () => {


    return (
        < Container className="fuckler500" maxWidth={false}sx={{backgroundColor:'beige', width:'100vw', height:'100vh', padding:'10%' }}>
            <Box sx={{gridRowStart:1, gridRowEnd:2, gridColumnStart:1, gridColumnEnd:2}}>
                <p>test</p>
            </Box>
        </Container>
    )
}

export default Landing



{/* <Link to={"/portfolios"}>
<Button variant="contained"> View our Work</Button>
</Link>
<Link to={"/products"}>
<Button variant="contained"> View Furniture</Button>
</Link>
<Link to={"/contact-us"}>
<Button variant="contained">
    Contact Us
</Button>
</Link> */}
