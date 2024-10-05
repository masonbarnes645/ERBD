import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const PortfolioDetails = () => {
    const { portfolioId } = useParams()
    const [portfolio, setPortfolio] = useState([])

    useEffect(() =>{
        fetch(`http://127.0.0.1:5555/portfolios/${portfolioId}`)
            .then((res) => {
                if (res.ok){
                    return res.json().then((data =>{
                        setPortfolio(data)
                    }))
                }
                else{
                    res.json().then((errObj) => toast.error(errObj.error))                  
                }
            })
            .catch((errObj) => toast.error(errObj.error))
    }, [])

    return(
        <div>
            {portfolio.title}
        </div>
    )

}

export default PortfolioDetails