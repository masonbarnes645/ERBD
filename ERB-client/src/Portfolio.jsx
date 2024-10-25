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
    <Grid container>
      {portfolios.map((portfolio) =>
        <Grid size={12}>
          <PortfolioSlate {...portfolio} />
        </Grid>)}
      </Grid> 

  )
}

export default Portfolio