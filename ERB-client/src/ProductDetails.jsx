import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetails = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState([])

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
    
    return(
        <div>{product.name}</div>
    )
}

export default ProductDetails