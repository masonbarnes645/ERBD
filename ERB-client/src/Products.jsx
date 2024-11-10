import { useEffect, useState } from "react"
import { fetchProducts } from "./api";
import ProductCard from "./ProductCard";
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { useOutletContext } from "react-router-dom";



const Products = () => {
  const { products } = useOutletContext()

  return (
    <Grid container spacing={6}  marginX={10} marginTop={20} display={'flex'} justifyContent={'center'}>
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