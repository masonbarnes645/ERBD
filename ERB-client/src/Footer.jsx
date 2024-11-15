import { Box } from "@mui/material"


const Footer = () => {

    return (

        <Box sx={{color:'black', display:'flex', justifyContent:'flex-start',  paddingTop:'2rem', width:'100%', bottom:0}}>
            <Box fontSize={'.8rem'}  width={'100%'} marginX={'1rem'}>
                <p>Interior Design |  Elizabeth Barnes Design ©2017 | email: betsy@elizabethbarnesdesign.com  |  phone: 510.301.2740</p>
            </Box>
        </Box>

    )
}

export default Footer