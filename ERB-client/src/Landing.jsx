import { Box, Container } from "@mui/material"
import { Link } from "react-router-dom"
import Camino1 from './assets/Camino_1.jpg';

const Landing = () => {


    return (
        <Container sx={{
            height: '100vh', 
            width: '100vw', 
            padding: 0,     
            margin: 0,      
        }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${Camino1})`, 
                    backgroundSize: 'cover',      
                    backgroundPosition: 'center', 
                    backgroundRepeat: 'no-repeat', 
                    height: '100vh', 
                    width: '100vw',
                }}
            >

            </Box>
            <Box>
                <Link to={"/portfolios"}>
                    <button>Portfolio</button>
                </Link>
                <Link to={"/products"}>
                    <button>View Products</button>
                </Link>
                <Link to={"/about-us"}>
                    <button>About EBD</button>
                </Link>
            </Box>
        </Container>
    )
}

export default Landing