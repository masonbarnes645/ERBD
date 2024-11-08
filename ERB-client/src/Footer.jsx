import { AppBar, Box } from "@mui/material"


const Footer = () => {

    return (

        <Box sx={{color:'black', display:'flex', justifyContent:'center',  marginTop:'2rem', width:'100%' }}>
            <Box fontSize={'.8rem'}  width={'100%'}>
                <p>Interior Design |  Elizabeth Barnes Design ©2017 | email: betsy@elizabethbarnesdesign.com  |  phone: 510.301.2740</p>
            </Box>
        </Box>

    )
}

export default Footer