import { useEffect, useState } from "react"
import { Container, Grid } from "semantic-ui-react";
import { fetchProducts } from "./api";
import ProductCard from "./ProductCard";


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