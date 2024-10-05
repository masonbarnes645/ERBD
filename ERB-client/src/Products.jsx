import { useEffect, useState } from "react"
import { Container, Grid } from "semantic-ui-react";
import ProductCard from "./ProductCard";


const Products = () =>{
    const [products, setProducts] = useState([])

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
        <Container>
        <Grid columns={5} doubling stackable>
              {products.length > 0 ? (
                products.map((product) => (
                  <Grid.Column key={product.id}>
                    <ProductCard {...product} />
                  </Grid.Column>
                ))
              ) : (
                <h2>...</h2>
              )}
            </Grid>
        </Container>
    )
}

export default Products