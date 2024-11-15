import ProductCard from "./ProductCard";
import Grid from '@mui/material/Grid2';
import { useOutletContext } from "react-router-dom";



const Products = () => {
  const { products } = useOutletContext()

  return (
    <Grid container spacing={6} marginTop={20} display={'flex'} justifyContent={'center'}>
      {products.length > 0 ? (
        products.map((product) => (
          <Grid>
              <ProductCard {...product} />
          </Grid>
        ))
      ) : (
        <div class="loader"></div>
      )}
    </Grid>
  );
};
export default Products