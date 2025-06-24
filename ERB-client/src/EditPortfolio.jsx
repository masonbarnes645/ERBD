import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPortfolioById } from "./api";


const EditPortfolio = () => {
    const { portfolioId } = useParams()
    const [portfolio, setPortfolio] = useState({
        photos: []
    })

    useEffect(() => {
        const loadPortfolio = async () => {
            if (!portfolioId) return;
            const data = await fetchPortfolioById(portfolioId);
            setPortfolio(data);
        };

        loadPortfolio();
    }, [])

    return     (
        <>
        <p>{portfolio.title}</p>
        </>
    )
}

export default EditPortfolio