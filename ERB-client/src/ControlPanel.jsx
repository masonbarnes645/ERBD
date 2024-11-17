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

    const handleLogout = () =>{
        try {
                fetch(`/api/v1/logout`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete product");
            }
    
            toast.success("Product deleted successfully");
        }
        catch (errObj) {
            toast.error(errObj.error);
        }
    }

    
    
    return (
        user ? 
            <Box>
                <PostForms />
                <CPL />
                <CPoL />
                <button onClick={handleLogout}> Logout</button>   
            </Box>
        : 
            navigate('/')
    )
    
}

export default ControlPanel