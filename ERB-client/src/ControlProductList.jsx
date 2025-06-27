import { deleteProduct } from "./api";
import { Box } from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom";
import { UserContext } from "./usercontext"
import { useContext } from "react";



const CPL = () => {
    const { products } = useOutletContext()
    const { user } = useContext(UserContext);
    
    const navigate = useNavigate()
    const handleDelete = (id) => {
        deleteProduct(id)


    }
    return (
        user ?
        <Box sx={{ bgcolor: 'black', overflow: 'scroll', overflowX: 'hidden', color:'white' }}>
            <h4> Products </h4>
            <ul>
                {products?.map((product) => (
                    <li key={product.id}> <button onClick={() => handleDelete(product.id)} className="control-delete-button">x</button>{product.name}</li>
                ))}
            </ul>
        </Box>
        : navigate('/')
    );

}

export default CPL

