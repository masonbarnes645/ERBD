import { Box, Paper } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"


const PortfolioSlate = ({ title, photos, id }) => {
    const imageUrl = photos
        ? `http://localhost:5555/${photos[0]?.file_path}`
        : null;

        

    return (
        <Link to={`/portfolios/${id}`}>
            <Box sx={{ marginY: '1rem' }}  className="port-hover">
                {photos ? (
                    <Box component={'img'}
                            src={imageUrl}
                            alt={title}
                            loading="lazy"
                            sx={{ height: {md:'30rem', sm:'20rem', xs:'15rem'}, width: {md:'40rem', sm:'26.4rem', xs:'20rem'}, objectFit: 'cover'}}  
                            >
                            
                    </Box>

                ) : (
                    <p>No image available</p>
                )}
                <Box color={'#36454F'} className="zen-font"  display={'flex'} justifyContent={'center'} borderBottom={'solid'}>
                    <h2>{title}</h2>
                </Box>
            </Box >
        </Link>

    )
}

export default PortfolioSlate