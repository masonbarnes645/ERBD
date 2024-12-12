import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { fetchProductById } from "./api"
import { useMediaQuery, useTheme } from "@mui/material"
import ProductDetailsLarge from "./ProductDetailsLarge"
import ProductDetailsSmall from "./ProductDetailsSmall"

const ProductDetails = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({
        photos: []
    })

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        const loadProduct = async () => {
            if (!productId) return;
            const data = await fetchProductById(productId);
            setProduct(data);
        };

        loadProduct();
    }, [])


    return (
        <>
            {
                isMobile ? (
                        <ProductDetailsSmall product = { product }/>
                ) : (
                    <div>
                        <ProductDetailsLarge product = { product }/>
                    </div>
                )}
        </>

    )
}

export default ProductDetails