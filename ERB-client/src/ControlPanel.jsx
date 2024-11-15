import { Box } from "@mui/material"
import PostForms from "./PostForms"
import CPL from "./ControlProductList"
import CPoL from "./ControlPortfolioList"
import { useContext } from "react"
import { UserContext } from "./usercontext"
import { useNavigate } from "react-router-dom"


const ControlPanel = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate() 
    
    return (
        user ? 
            <Box>
                <PostForms />
                <CPL />
                <CPoL />   
            </Box>
        : 
            navigate('/')
    )
    
}

export default ControlPanel