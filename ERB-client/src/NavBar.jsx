import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const NavBar = () => {
    const navigate = useNavigate()
    return(
        <div className="navigation-bar">
            <img src="src/assets/Header_logo.png" alt="header" />
            <Stack spacing={2} direction="row">
                <Button variant="text" onClick={() => navigate("/")}> Home </Button>
                <button onClick={() => navigate("/products")}> Products </button>
                <button onClick={() => navigate("/portfolios")}> Portfolio </button>
            </Stack>
        </div>
    )
}

export default NavBar   