import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import PortfolioSlate from "./PortfolioSlate"
import { Container, Grid } from "semantic-ui-react";

const Portfolio = () =>{
    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:5555/portfolios")
            .then((res) => {
                if (res.ok) {
                    res.json().then(setPortfolios)
                }
                else {
                    res.json().then((errObj) => toast.error(errObj.error))
                }
            })
            .catch((errObj) => toast.error(errObj.error))
    }, [])

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