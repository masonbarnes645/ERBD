import Box from "@mui/material/Box"
import Carousel from "./Carousel"
import './App.css'
import { useMediaQuery, useTheme } from "@mui/material";



const Landing = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            {isMobile ? (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignContent: 'flex-start',
                    minHeight: '100vh',
                    paddingTop: '7rem',
                    backgroundImage: `url('src/assets/mobile_landing.jpeg')`
                }}>
                    <Box width={'80%'} marginX={'10%'}>
                        <img src="src/assets/Header_logo.png" style={{ width: '100%' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%', marginX: '20%', gap: '3rem', paddingTop: '4rem' }}>
                        <button>View Portfolio</button>
                        <button>View Furniture</button>
                        <button>Contact Us</button>
                    </Box>
                </Box>
            ) :
                (<Box sx={{ marginTop: '4rem' }}>
                    <Box display={'flex'} justifyContent={'center'} marginBottom={'3rem'}>
                        <img src="src/assets/Header_logo.png" />
                    </Box>
                    <Box width="1080px">
                        <Carousel />
                    </Box>

                </Box>)

            }
        </>

    )
}

export default Landing



