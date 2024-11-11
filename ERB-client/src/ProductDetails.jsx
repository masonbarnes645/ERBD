import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteProduct, fetchProductById } from "./api"
import { Box, useMediaQuery, useTheme } from "@mui/material"
import ProductDetailsLarge from "./ProductDetailsLarge"

const ProductDetails = ({ name, description, photos }) => {
    const { productId } = useParams()
    const [product, setProduct] = useState([{}])

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const navigate = useNavigate()

    useEffect(() => {
        const loadProduct = async () => {
            if (!productId) return;
            const data = await fetchProductById(productId);
            setProduct(data);
        };

        loadProduct();
    }, [])



    // when click side image, change main photo, display main photo in main box 5555/uploads/${mainPhoto}


    return (
        <>
            {
                isMobile ? (
                    <div>
                        <h2>sdsd</h2>
                    </div >
                ) : (
                    <div>
                        <ProductDetailsLarge product={ product }/>
                    </div>
                )}
        </>

    )
}

export default ProductDetails