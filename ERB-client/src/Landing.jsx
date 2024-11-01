import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import { Button, Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';


const Landing = () => {


    return (
        <Box width={'100%'}>

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


    )
}

export default Landing
