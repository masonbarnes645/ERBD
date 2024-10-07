import { useEffect, useState } from "react"
import PortfolioSlate from "./PortfolioSlate"
import { Container, Grid } from "semantic-ui-react";
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
        <Container>
        <Grid columns={5} doubling stackable>
              {portfolios.length > 0 ? (
                portfolios.map((portfolio) => (
                  <Grid.Column key={portfolio.id}>
                    <PortfolioSlate {...portfolio} />
                  </Grid.Column>
                ))
              ) : (
                <h2>...</h2>
              )}
            </Grid>
        </Container>
    )
}

export default Portfolio