import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import { UserProvider } from "./usercontext";
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { fetchPortfolios, fetchProducts } from "./api";


const App = () => {
  const [portfolios, setPortfolios] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadPortfolios = async () => {
      try {
        const data = await fetchPortfolios();
        setPortfolios(data);
      } catch (err) {
        setError(err.message);
      }
    };

    loadPortfolios();
  }, []);

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

    <UserProvider>
      <Box
        sx={{
          minHeight: '100vh', 
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NavBar />
        <Box sx={{ flexGrow: 1 }}>
          <Outlet context={{ portfolios, products }} />
        </Box>
        <Toaster />
      </Box>
      <Footer/>
    </UserProvider>
  )

}

export default App;