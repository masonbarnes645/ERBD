import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { postInquiry } from './api';
import { Button } from '@mui/material';


const Contact = () => {
    const [formData, setFormData] = useState({});


    const handleChange = (e) => {
        const { name, value, } = e.target;
        {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        console.log(formData)
        e.preventDefault()
        await postInquiry(formData)
    }


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
                    <Paper component='form' onSubmit={handleSubmit} sx={{ width: '100%', height: 400, paddingTop: 4, display: 'grid', alignContent: 'stretch' }} >
                        <Grid container spacing={2} sx={{ width: '100%', justifyContent:'center' }}>
                            <Grid item lg={6} xs={12} sx={{paddingRight:10}} >
                                <TextField fullWidth label="First Name" onChange={handleChange} name="firstname" />
                            </Grid>
                            <Grid item lg={6} xs={12} >
                                <TextField fullWidth label="Last Name" onChange={handleChange} name="lastname" />
                            </Grid>
                        </Grid>

                        <Box sx={{ marginRight:5, marginLeft:2 }}>
                            <TextField fullWidth sx={{marginBottom:2}} label="Email" onChange={handleChange} name='email' />
                            <TextField fullWidth label="Subject" onChange={handleChange} name='subject' />
                        </Box>
                        <Box sx={{marginLeft:2, marginRight:5, paddingBottom:5}}>
                            <TextField fullWidth  label="Message" onChange={handleChange} name='message'  />
                        </Box>
                        <Button type='submit'>Submit</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Contact