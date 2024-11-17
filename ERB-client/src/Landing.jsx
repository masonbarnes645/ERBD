import Box from "@mui/material/Box"
import Carousel from "./Carousel"
import './App.css'
import { useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";



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
                    backgroundImage: { xs: `url('src/assets/martis10.jpg')`, sm: `url('src/assets/landing2.jpeg')` },
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'


                }}>

                    <Box width={{ xs: '80%', sm: '60%' }} marginX={{ xs: '10%', sm: '20%' }} display={'flex'} justifyContent={'center'}  >
                        <img src="assets/Header_logo.png" style={{ width: '100%' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%', marginX: '20%', gap: '3rem', paddingTop: '4rem' }}>
                        <button onClick={() => navigate('/portfolios')}>View Portfolio</button>
                        <button onClick={() => navigate('/products')}>View Furniture</button>
                        <button onClick={() => navigate('/contact-us')}>Contact Us</button>
                    </Box>
                </Box>
            ) :
                (<Box sx={{
                    backgroundImage: `url('assets/landing2.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    width: '100vw',
                    display: 'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Box >
                        <h1 className="zen-font" style={{fontSize:'5rem', color:'darkslategrey'}}> Elizabeth Barnes Design</h1>
                    </Box>


                </Box>)

            }
        </>

    )
}

export default Landing



