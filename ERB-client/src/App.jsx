import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import { UserProvider } from "./usercontext";
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { fetchPortfolios } from "./api";


const App = () => {
  const [portfolios, setPortfolios] = useState([])

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
          <Outlet context={{ portfolios }} />
        </Box>
        <Toaster />
      </Box>
      <Footer/>
    </UserProvider>
  )

}

export default App;