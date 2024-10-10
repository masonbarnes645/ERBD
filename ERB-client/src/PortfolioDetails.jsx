import { useEffect, useState } from "react"

import { useNavigate, useParams } from "react-router-dom"
import { deletePortfolio, fetchPortfolioById } from "./api"


const PortfolioDetails = () => {
    const { portfolioId } = useParams()
    const [portfolio, setPortfolio] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const loadPortfolio = async () => {
            if (!portfolioId) return;
            const data = await fetchPortfolioById(portfolioId);
            setPortfolio(data);
        };
        
        loadPortfolio();
    }, [])


    const handleDelete = async () => {
        await deletePortfolio(portfolioId)
        navigate("/")
    }

    return(
        <div>
            {portfolio.title}
            {portfolio.photos}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )

}

export default PortfolioDetails