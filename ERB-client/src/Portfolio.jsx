import { useEffect, useState } from "react"
import PortfolioSlate from "./PortfolioSlate"
import Grid from '@mui/material/Grid2';


import { fetchPortfolios } from "./api";

const Portfolio = () => {
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

  console.log(portfolios)
  return (
    <Grid container spacing={8} display={'flex'} justifyContent={'center'} marginX={'5rem'} marginTop={'3rem'}>
      {portfolios.length > 0 ? (portfolios.map((portfolio) =>
        <Grid item>
          <PortfolioSlate {...portfolio} />
        </Grid>)) : <div class="loader"></div> }
      </Grid> 

  )
}

export default Portfolio