import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { postInquiry } from './api';
import { Button } from '@mui/material';
import * as yup from 'yup';



const inqSchema = yup.object().shape({
    firstname: yup.string().required("First Name is Required"),
    lastname: yup.string().required("Last Name is required"),
    email: yup.email().required("Email is Required"),
    subject: yup.string().required("Subject is Required"),
    message: yup.string().required("Message is Required")
})


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
        e.preventDefault()
        await postInquiry(formData)
        setFormData({
            firstname: '',
            lastname:"",
            email: "",
            subject:"",
            message: ""
        })
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
                    <Paper  elevation={10} component='form' onSubmit={handleSubmit} sx={{ width: '100%', height: 400, paddingTop: 4, display: 'grid', alignContent: 'stretch' }} >
                        <Grid container spacing={2} sx={{ width: '100%', justifyContent:'center' }}>
                            <Grid item lg={6} xs={12} sx={{paddingRight:10}} >
                                <TextField fullWidth label="First Name" onChange={handleChange} value={formData.firstname} name="firstname" />
                            </Grid>
                            <Grid item lg={6} xs={12} >
                                <TextField fullWidth label="Last Name" onChange={handleChange} value={formData.lastname} name="lastname" />
                            </Grid>
                        </Grid>

                        <Box sx={{ marginRight:5, marginLeft:2 }}>
                            <TextField fullWidth sx={{marginBottom:2}} label="Email" onChange={handleChange} value={formData.email} name='email' />
                            <TextField fullWidth label="Subject" onChange={handleChange} value={formData.subject} name='subject' />
                        </Box>
                        <Box sx={{marginLeft:2, marginRight:5, paddingBottom:5}}>
                            <TextField fullWidth  label="Message" onChange={handleChange} name='message'  value={formData.message} multiline rows={3}  />
                        </Box>
                        <Button type='submit'>Submit</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Contact