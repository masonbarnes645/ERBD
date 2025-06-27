import { Box } from "@mui/material"
import PostForms from "./PostForms"
import CPL from "./ControlProductList"
import CPoL from "./ControlPortfolioList"
import { useContext, useEffect } from "react"
import { UserContext } from "./usercontext"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const ControlPanel = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate() 

    useEffect(() => {
        if (!user) navigate('/')
    }, (user, navigate))
    const handleLogout = async () =>{
        try {
                const res = await fetch(`/api/v1/logout`, {
                method: "DELETE",
            });
            if (!res.ok) {
                throw new Error("Failed to log out");
            }
    
            setUser(null)
            toast.success("logged out");
        }
        catch (errObj) {
            toast.error(errObj.message);
        }
    }

    
    
    return (
        user ? 
            <Box>
                <PostForms />
                <button onClick={() => {navigate('/control-product')}}> View/Edit Products</button>
                <button onClick={() => {navigate('/control-portfolio')}}> View/Edit Portfolios</button>
                <button onClick={handleLogout}>Logout</button>   
            </Box>
        : 
            navigate('/')
    )
    
}

export default ControlPanel