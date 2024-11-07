import { AppBar, Box } from "@mui/material"


const Footer = () => {

    return (

        <Box sx={{color:'black', display:'flex', justifyContent:'flex-end',  marginTop:'2rem' }}>
            <Box marginRight={'2rem'} fontSize={'.8rem'} >
                <p>Interior Design |  Elizabeth Barnes Design ©2017 | email: betsy@elizabethbarnesdesign.com  |  phone: 510.301.2740</p>
            </Box>
        </Box>

    )
}

export default Footer