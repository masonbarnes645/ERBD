import { useEffect, useState } from "react"

import { useNavigate, useParams } from "react-router-dom"
import { fetchPortfolioById } from "./api"
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import './App.css'


const PortfolioDetails = () => {
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





    return (
        <Box marginTop={'5rem'} >
            <Box textAlign={'center'} color={'gray'} borderBottom={'solid'}>
                <Typography sx={{fontSize:{lg:'5rem', md:'4rem', sm:'3rem', xs:'1.5rem'}, fontFamily:'Zen Antique'}}>
                    {portfolio.title}
                </Typography>
            </Box>
            <ImageList variant="masonry" gap={6} sx={{marginX:'1rem', marginTop:'2rem'}}>
                {portfolio.photos.map((photo) => (
                    <ImageListItem key={photo.id}>
                        <img src={photo.file_url} alt={photo.title} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>

    );
}


export default PortfolioDetails