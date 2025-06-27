import { deleteProduct } from "./api";
import { Box } from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom";


const CPL = () => {
    const { products } = useOutletContext()
    const navigate = useNavigate()
    const handleDelete = (id) => {
        deleteProduct(id)


    }
    return (
        <Box sx={{ bgcolor: 'black', overflow: 'scroll', overflowX: 'hidden', color:'white' }}>
            <h4> Products </h4>
            <ul>
                {products?.map((product) => (
                    <li key={product.id}> <button onClick={() => handleDelete(product.id)} className="control-delete-button">x</button>{product.name}</li>
                ))}
            </ul>
        </Box>
    );

}

export default CPL

