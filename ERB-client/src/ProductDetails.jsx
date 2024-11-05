import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteProduct, fetchProductById } from "./api"
import { Box } from "@mui/material"

const ProductDetails = ({ name, description, photos}) => {
    const { productId } = useParams()
    const [product, setProduct] = useState([{}])
    const [mainPhoto, setMainPhoto] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        const loadProduct = async () => {
            if (!productId) return;
            const data = await fetchProductById(productId);
            console.log(data)
            setProduct(data);
        };
        
        loadProduct();
    }, [])
    


    
    
    return(
        <Box> 
            {product.photos?.map((photo) => (<Box key={photo.id}> <img src={`http://localhost:5555/${photo.file_path}`}/> </Box>))}
        </Box>
    )
}

export default ProductDetails