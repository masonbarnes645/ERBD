import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { postInquiry } from './api';
import { useMediaQuery, useTheme } from '@mui/material';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const description = "Elizabeth Barnes Design is a San Francisco Bay Area based design firm. Started in 2012 by Connecticut native Betsy Barnes, EBD brings a down-to-earth approach to designing beautiful spaces. Every project is unique to the client's personal taste, timeline, and budget. Collaborating with architects, contractors, and craftspeople, Betsy is well-versed in managing small and large-scale projects.";

const initValues = {
    firstname: '',
    lastname: "",
    email: "",
    subject: "",
    message: ""
};

const inqSchema = yup.object().shape({
    firstname: yup.string().required("Required"),
    lastname: yup.string().required("Required"),
    email: yup.string().email("Invalid email format").required("Email is Required"),
    subject: yup.string().required("Subject is Required"),
    message: yup.string().required("Message is Required")
});

const Contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

    const handleSubmit = async (values, { resetForm }) => {
        await postInquiry(values);
        resetForm();
    };

    return (
        <Box display={'flex'} minHeight={'80vh'} justifyContent={'center'} alignItems={'center'}>
            {!isMobile && (
                <Box sx={{ width: '32%', marginLeft: '2rem' }}>
                    <img src='src/assets/Header_logo.png' alt="Logo" />
                    <p style={{ color: 'black' }}>{description}</p>
                </Box>
            )}
            <Formik
                initialValues={initValues}
                validationSchema={inqSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginX: '2rem', marginLeft: { sm: 0, lg: '10rem' }, gap: '1rem', width: { sm: '70%', lg: '50%' } }}>
                            <Box display={'flex'} gap={'1rem'}>
                                <Field as={TextField} fullWidth label="First Name" name="firstname" />
                                <ErrorMessage name="firstname" component="div" style={{ color: 'red' }} />
                                
                                <Field as={TextField} fullWidth label="Last Name" name="lastname" />
                                <ErrorMessage name="lastname" component="div" style={{ color: 'red' }} />
                            </Box>
                            <Box>
                                <Field as={TextField} fullWidth sx={{ marginBottom: 2 }} label="Email" name="email" />
                                <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                                
                                <Field as={TextField} fullWidth label="Subject" name="subject" />
                                <ErrorMessage name="subject" component="div" style={{ color: 'red' }} />
                            </Box>
                            <Field as={TextField} fullWidth label="Message" name="message" multiline rows={3} />
                            <ErrorMessage name="message" component="div" style={{ color: 'red' }} />
                            
                            <button type="submit">Submit</button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}

export default Contact;
