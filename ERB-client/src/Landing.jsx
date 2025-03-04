import Box from "@mui/material/Box"
import Carousel from "./Carousel"
import './App.css'
import { useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import xsbg from '../public/martis10.jpg'
import lgbg from '../public/darklanding.jpg'
import header from '../public/Header_logo.png'





const Landing = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    const navigate = useNavigate()

    return (
        <>
            {isMobile ? (

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignContent: 'flex-start',
                    minHeight: '100vh',
                    minWidth: '100vw',
                    paddingTop: '7rem',
                    backgroundImage: { xs: `url(${xsbg})`, sm: `url(${lgbg})` },
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>

                    <Box width={{ xs: '80%', sm: '60%' }} marginX={{ xs: '10%', sm: '20%' }} display={'flex'} justifyContent={'center'}  >
                        <img src={header} style={{ width: '100%' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%', marginX: '20%', gap: '3rem', paddingTop: '4rem' }}>
                        <button onClick={() => navigate('/portfolios')}>View Portfolio</button>
                        <button onClick={() => navigate('/products')}>View Furniture</button>
                        <button onClick={() => navigate('/contact-us')}>Contact Us</button>
                        <button onClick={() => navigate('/about')}>About EBD</button>
                    </Box>
                </Box>
            ) :
                (
                  <></>


)

            }
        </>

    )
}

export default Landing



