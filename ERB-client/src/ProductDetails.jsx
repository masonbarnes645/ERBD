import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteProduct, fetchProductById } from "./api"

const ProductDetails = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState([{}])
    const navigate = useNavigate()

    useEffect(() => {
        const loadProduct = async () => {
            if (!productId) return;
            const data = await fetchProductById(productId);
            setProduct(data);
        };
        
        loadProduct();
    }, [])
    
    const handleDelete = async () =>{
        await deleteProduct(productId)
        navigate("/")

    }

    if (!product) {
        return <div>Loading...</div>; 
      }
    return(
        <>
        <div>{product.name}</div>
        <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default ProductDetails