import { Box } from "@mui/material"
import PostForms from "./PostForms"
import CPL from "./ControlProductList"
import CPoL from "./ControlPortfolioList"

const ControlPanel = () => {

    return (
        <Box>
            <PostForms />
            <CPL/>
            <CPoL/>
            
        </Box>

    )
}

export default ControlPanel