import { useEffect, useState } from "react"
import { fetchProducts } from "./api";



const Products = () =>{
    const [products, setProducts] = useState([])

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
    }, []);

    console.log(products)
    return(
        <div></div>
    )
}

export default Products