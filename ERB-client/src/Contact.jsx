import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { width } from '@mui/system';

const Contact = () => {



    return (
        <Box alignItems={"center"}>
            <Grid container spacing={2} alignItems={"center"} marginX={20} marginY={20} >
                <Grid size={4}>
                    <Box>
                        <img src="./src/assets/headshotEBD.jpeg" />
                        <Box maxWidth={'80%'}>
                            <Typography variant="body1">
                                About ElizabethBarnesDesign Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={8}>
                    <Paper component='form' sx={{ width: '100%', height: 400, paddingTop:8 }} >
                        <Box alignContent={'center'}>
                            <TextField label="First Name" />
                            <TextField label="Last Name" />
                        </Box>
                        <Box>
                            <TextField label="Email"/>
                        </Box>
                        <Box>
                            <TextField label="Subject"/>
                        </Box>
                        <Box>
                            <TextField label="Message" sx={{width:'80%', marginX:"5%"}}/>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Contact