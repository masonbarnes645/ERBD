import { useEffect, useState } from "react"
import PortfolioSlate from "./PortfolioSlate"
import Grid from '@mui/material/Grid2';


import { fetchPortfolios } from "./api";
import { useOutletContext } from "react-router-dom";

const Portfolio = () => {
  const { portfolios } = useOutletContext()

  return (
    <Grid container spacing={6} display={'flex'} justifyContent={'center'} marginTop={'3rem'} >
      {portfolios.length > 0 ? (portfolios.map((portfolio) =>
        <Grid item >
          <PortfolioSlate {...portfolio} />
        </Grid>)) : <div class="loader"></div> }
      </Grid> 

  )
}


export default Portfolio