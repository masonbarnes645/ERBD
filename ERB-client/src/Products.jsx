import { useEffect, useState } from "react"
import { fetchProducts } from "./api";
import ProductCard from "./ProductCard";
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';



const Products = () => {
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

  return (
    <Grid>
      {products.length > 0 ? (
        products.map((product) => (
          <Box key={product.id}>
            <ProductCard {...product} />
          </Box>
        ))
      ) : (
        <div>No products available</div>
      )}
    </Grid>
  );
};
export default Products