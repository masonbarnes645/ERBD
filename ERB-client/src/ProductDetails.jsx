import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteProduct, fetchProductById } from "./api"
import { Box } from "@mui/material"

const ProductDetails = ({ name, description, photos }) => {
    const { productId } = useParams()
    const [product, setProduct] = useState([{}])
    const [mainPhotoId, setMainPhotoId] = useState(0)

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

    const handleClick = (index) => {
        setMainPhotoId(index)
    }

    // when click side image, change main photo, display main photo in main box 5555/uploads/${mainPhoto}


    return (
        <Box>
            <Box sx={{borderStyle:'solid'}}>
                {product.photos && product.photos[mainPhotoId] && (
                    <img src={`http://localhost:5555/${product.photos[mainPhotoId].file_path}`} />
                )}
            </Box>
            {product.photos?.map((photo, index) => (<Box key={photo.id}> <img src={`http://localhost:5555/${photo.file_path}`} onClick={() => handleClick(index)}/> </Box>))}
        </Box>
    )
}

export default ProductDetails