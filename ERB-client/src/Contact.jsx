import { Box, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';

const Contact = () => {



    return (
        <Box alignItems={"center"}>
            <Grid container spacing={2} alignItems={"center"} marginX={20} marginY={30} >
                <Grid size={4}>
                    <Box>
                        <img src="./src/assets/headshotEBD.jpeg" />
                        <Box maxWidth={'100%'}>
                            <Typography variant="body1">
                                About ElizabethBarnesDesign Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={8}>
                    <h1>sfdsfd</h1>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Contact