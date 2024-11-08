import { useEffect, useState } from "react";
import { deleteProduct, fetchProducts } from "./api";
import { Box, Button } from "@mui/material";


const CPL = () => {
    const [products, setProducts] = useState([])
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);

            } catch (err) {
                setError(err.message);
            }
        };

        loadProducts();
    }, [refresh]);


    const handleDelete = (id) => {
        deleteProduct(id)
        
        setRefresh(prev => prev += 1)

    }

    return (
        <Box sx={{ bgcolor: 'black', height: '15rem', overflow: 'scroll', width: '13rem', overflowX: 'hidden' }}>
            <ul>
                {products.map((product) => (
                    <li key={product.id}> <button onClick={() => handleDelete(product.id)} className="control-delete-button">x</button>{product.name}</li>
                ))}
            </ul>
        </Box>
    );

}

export default CPL

// scrollable box with all products, delete product button attached, edit product(future)