import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteProduct, fetchProductById } from "./api"

const ProductDetails = ({ name, description, photos}) => {
    const { productId } = useParams()
    const [product, setProduct] = useState([{}])

    const navigate = useNavigate()

    // fetch all photos
    useEffect(() => {
        const loadProduct = async () => {
            if (!productId) return;
            const data = await fetchProductById(productId);
            console.log(data)
            setProduct(data);
        };
        
        loadProduct();
    }, [])
    
    const handleDelete = async () =>{
        await deleteProduct(productId)
        navigate("/")

    }

        // Open a form that has the current info already in the values of each box, change what you want and send that form data to the patch request


    if (!product) {
        return <div>Loading...</div>; 
      }
    return(
        <>
        <div>{product.name} </div>
        <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default ProductDetails