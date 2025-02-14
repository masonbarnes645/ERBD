import { Box } from "@mui/material"
import headshot from '../public/headshotEBD.jpeg'
import header from '../public/Header_logo.png'
const description = "Elizabeth Barnes Design is a San Francisco Bay Area based design firm. Started in 2012 by Connecticut native Betsy Barnes, EBD brings a down-to-earth approach to designing beautiful spaces. Every project is unique to the client's personal taste, timeline, and budget. Collaborating with architects, contractors, and craftspeople, Betsy is well-versed in managing small and large-scale projects.";



const About = () => {

    return (
        <Box sx={{ width: { xs: '90%', md: '40%' }, marginLeft: { xs: 'auto', md: '2rem' }, marginRight: { xs: 'auto', md: '0' }, marginTop: {xs:'3rem'} }}>
            <img src={header} alt="Logo" style={{ width: '100%', height: 'auto' }} />
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'center', md: 'flex-start' }}>
                <img
                    src={headshot}
                    style={{
                        marginRight: { md: '1rem' },
                        marginTop: '1rem',
                        width: '100%',
                        maxWidth: '200px',
                        height: 'auto'
                    }}
                />
                <p className='zen-font' style={{ color: 'black', overflowY: 'auto', height: 'auto', maxHeight: '363px', textAlign: 'center' }}>
                    {description}
                </p>
            </Box>
        </Box>

    )
}

export default About