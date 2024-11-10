import {  useState } from "react";
import { deleteProduct } from "./api";
import { Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";


const CPL = () => {
    const { products } = useOutletContext()
    const handleDelete = (id) => {
        deleteProduct(id)

    }
    return (
        <Box sx={{ bgcolor: 'black', height: '15rem', overflow: 'scroll', width: '13rem', overflowX: 'hidden' }}>
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

