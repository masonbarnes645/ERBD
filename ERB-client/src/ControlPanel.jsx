import { Box } from "@mui/material"
import PostForms from "./PostForms"
import CPL from "./ControlProductList"
import CPoL from "./ControlPortfolioList"
import { useContext } from "react"
import { UserContext } from "./usercontext"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const ControlPanel = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate() 

    const handleLogout = async () =>{
        try {
                const res = await fetch(`/api/v1/logout`, {
                method: "DELETE",
            });
            if (!res.ok) {
                throw new Error("Failed to log out");
            }
    
            toast.success("logged out");
            navigate('/')
        }
        catch (errObj) {
            toast.error(errObj.message);
        }
    }

    
    
    return (
        user ? 
            <Box>
                <PostForms />
                <CPL />
                <CPoL />
                <button onClick={handleLogout}>Logout</button>   
            </Box>
        : 
            navigate('/')
    )
    
}

export default ControlPanel