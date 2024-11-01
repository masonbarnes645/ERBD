import { useEffect, useState } from "react"

import { useNavigate, useParams } from "react-router-dom"
import { deletePortfolio, fetchPortfolioById } from "./api"
import { ImageList, ImageListItem } from "@mui/material";


const PortfolioDetails = () => {
    const { portfolioId } = useParams()
    const [portfolio, setPortfolio] = useState({
        photos : []
    })
    const [editMode, setEditMode] = useState(false)
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

    
    
    
    
    return (
        <ImageList variant="masonry">
            {portfolio.photos.map((photo) => (
                <ImageListItem key={photo.id}>
                    <img src={`http://localhost:5555/${photo.file_path}`} alt={photo.title} />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
    

export default PortfolioDetails