import { useEffect, useState } from "react"


const Products = () =>{
    const [products, setProducts] = useState()

    useEffect(() => {
        fetch("http://127.0.0.1:5555/products")
            .then((res) => {
                if (res.ok) {
                    res.json().then(setProducts)
                }
                else {
                    res.json().then((errObj) => toast.error(errObj.error))
                }
            })
            .catch((errObj) => toast.error(errObj.error))
    }, [])

    console.log(products)
    return(
        <div>
            <h4>Poo poo</h4>
        </div>
    )
}

export default Products