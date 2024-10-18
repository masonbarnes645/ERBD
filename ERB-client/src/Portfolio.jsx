import { useEffect, useState } from "react"
import PortfolioSlate from "./PortfolioSlate"

import { fetchPortfolios } from "./api";

const Portfolio = () =>{
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
    return(
      <div></div>
    )
}

export default Portfolio