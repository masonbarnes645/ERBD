import { Link } from "react-router-dom"
import Container from '@mui/material/Container'
import Box from "@mui/material/Box"
import { Button, Grid2, Typography } from "@mui/material"

const Landing = () => {


    return (
        <Box alignItems='center' marginX={20} sx={{ scrollSnapType: "y mandatory", scrollBehavior:'smooth' }} overflowY={'auto'}>
            <Grid2 container spacing={2} alignItems="center" paddingY={10} sx={{scrollSnapAlign: 'start'}}>
                <Grid2 item xs={12} sm={8}>
                    <Box width={300} marginTop={10}>
                        <Typography variant="body1" component='p'>
                            About ElizabethBarnesDesign Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.
                        </Typography>
                        <Link to={"/about-us"}>
                            <Button variant="contained">
                                Contact Us
                            </Button>
                        </Link>
                    </Box>
                </Grid2>
                <Grid2 item xs={12} sm={4} >
                    <Box marginX={5} marginTop={10}>
                        <img src="src/assets/Camino_1.jpg" width="100%" alt="Camino" />
                    </Box>
                </Grid2>

            </Grid2>
            <Grid2 container spacing={2} alignItems="center"  sx={{scrollSnapAlign: 'start'}}>
                <Grid2 item xs={12} sm={4}>
                    <Box marginX={5} marginTop={10}>
                        <img src="src/assets/Camino_1.jpg" width="100%" alt="Camino" />
                    </Box>
                </Grid2>

                <Grid2 item xs={12} sm={8}>
                    <Box width={300} marginTop={10}>
                        <Typography variant="body1" component='p'>
                            About ElizabethBarnesDesign Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.
                        </Typography>
                        <Link to={"/portfolios"}>
                            <Button variant="contained"> View our Work</Button>
                        </Link>
                    </Box>
                </Grid2>
            </Grid2>
            <Grid2 container spacing={2} alignItems="center" paddingY={10}  sx={{scrollSnapAlign: 'start'}}>
                <Grid2 item xs={12} sm={8}>
                    <Box width={300} marginTop={10}>
                        <Typography variant="body1" component='p'>
                            About ElizabethBarnesDesign Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.
                        </Typography>
                        <Link to={"/products"}>
                            <Button variant="contained"> View Furniture</Button>
                        </Link>
                    </Box>
                </Grid2>
                <Grid2 item xs={12} sm={4}>
                    <Box marginX={5} marginTop={10}>
                        <img src="src/assets/Camino_1.jpg" width="100%" alt="Camino" />
                    </Box>
                </Grid2>

            </Grid2>

        </Box>

    )
}

export default Landing
// <div>
//     <Link to={"/portfolios"}>
//         <button>Portfolio</button>
//     </Link>
//     <Link to={"/products"}>
//         <button>View Products</button>
//     </Link>

// </div>