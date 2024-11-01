import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import { Button, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';


const Landing = () => {


    return (
        <Box alignItems='center' marginX={'20vw'} sx={{ scrollSnapType: "y mandatory", scrollBehavior:'smooth', height: '100vh', overflowY: 'auto', width: '100vw' }}>
            <Grid container spacing={2} alignItems="center" paddingY={10} sx={{scrollSnapAlign: 'center'}}>
                <Grid item xs={12} sm={8}>
                    <Box width={300} marginTop={10}>
                        <Typography variant="body1" component='p'>
                            About ElizabethBarnesDesign Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Box marginX={5} marginTop={10}>
                        <img src="src/assets/Camino_1.jpg" width="100%" alt="Camino" />
                    </Box>
                </Grid>

            </Grid>
            <Grid container spacing={2} alignItems="center"  sx={{scrollSnapAlign: 'center'}}>
                <Grid item xs={12} sm={4}>
                    <Box marginX={5} marginTop={10}>
                        <img src="src/assets/Camino_1.jpg" width="100%" alt="Camino" />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={8}>
                    <Box width={300} marginTop={10}>
                        <Typography variant="body1" component='p'>
                            About ElizabethBarnesDesign Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" paddingY={10}  sx={{scrollSnapAlign: 'center'}}>
                <Grid item xs={12} sm={8}>
                    <Box width={300} marginTop={10}>
                        <Typography variant="body1" component='p'>
                            About ElizabethBarnesDesign Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box marginX={5} marginTop={10}>
                        <img src="src/assets/Camino_1.jpg" width="100%" alt="Camino" />
                    </Box>
                </Grid>

            </Grid>

        </Box>

    )
}

export default Landing

                        // <Link to={"/portfolios"}>
                        //     <Button variant="contained"> View our Work</Button>
                        // </Link>
                        // <Link to={"/products"}>
                        //     <Button variant="contained"> View Furniture</Button>
                        // </Link>
                        // <Link to={"/contact-us"}>
                        //     <Button variant="contained">
                        //         Contact Us
                        //     </Button>
                        // </Link>