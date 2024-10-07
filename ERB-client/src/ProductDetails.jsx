import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteProduct } from "./api"
import toast from "react-hot-toast"

const ProductDetails = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        fetch(`http://127.0.0.1:5555/products/${productId}`)
            .then((res) => {
                if (res.ok){
                    return res.json().then((data =>{
                        setProduct(data)
                        console.log(product)
                    }))
                }
                else{
                    res.json().then((errObj) => toast.error(errObj.error))                  
                }
            })
            .catch((errObj) => toast.error(errObj.error))
    }, [])
    
    const handleDelete = async () =>{
        await deleteProduct(productId)
        navigate("/")

    }

    return(
        <>
        <div>{product.name}</div>
        <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default ProductDetails