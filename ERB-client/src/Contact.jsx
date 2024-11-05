import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { postInquiry } from './api';
import { Button } from '@mui/material';
import * as yup from 'yup';

//! EMAIL YUP VALIDATION EMAIL YUP

const description = "Elizabeth Barnes Design is a San Francisco Bay Area based design firm.  Started in 2012 by Connecticut native Betsy Barnes, EBD brings a down to earth approach to designing beautiful spaces.   Every project is unique to the client's personal taste, timeline and budget.  Collaborating with architects, contractors and craftspeople, Betsy is well versed in the management of small and large scale projects."

const inqSchema = yup.object().shape({
    firstname: yup.string().required("First Name is Required"),
    lastname: yup.string().required("Last Name is required"),
    email: yup.string().required("Email is Required"),
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
            lastname: "",
            email: "",
            subject: "",
            message: ""
        })
    }


    return (
        <Paper elevation={10} component='form' onSubmit={handleSubmit} sx={{ padding: '2rem', width: '100%', marginTop:'10rem' }}>
            <Box display={'flex'} justifyContent={'space-evenly'}>
                <TextField fullWidth label="First Name" onChange={handleChange} value={formData.firstname} name="firstname" />
                <TextField fullWidth label="Last Name" onChange={handleChange} value={formData.lastname} name="lastname" />
            </Box>
            <Box sx={{}} display={'flex'}>
                <TextField fullWidth sx={{ marginBottom: 2 }} label="Email" onChange={handleChange} value={formData.email} name='email' />
                <TextField fullWidth label="Subject" onChange={handleChange} value={formData.subject} name='subject' />
            </Box>
            <Box sx={{}}>
                <TextField fullWidth label="Message" onChange={handleChange} name='message' value={formData.message} multiline rows={3} />
            </Box>
            <Button type='submit'>Submit</Button>
        </Paper>

    )
}

export default Contact