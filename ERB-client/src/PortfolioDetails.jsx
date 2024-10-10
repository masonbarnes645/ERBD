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
        console.log(portfolio)
    }, [])


    const handleDelete = async () => {
        await deletePortfolio(portfolioId)
        navigate("/")
    }

    return (
        <div>
            <h2>{portfolio.title}</h2>
            {portfolio.photos && portfolio.photos.length > 0 ? (
                <div>
                    {portfolio.photos.map(photo => (
                        <div key={photo.id}>
                            <h3>{photo.title}</h3>
                            <img src={photo.image_url} alt={photo.title} />
                            <p>{photo.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No photos available.</p>
            )}
        </div>
    );
};

            export default PortfolioDetails