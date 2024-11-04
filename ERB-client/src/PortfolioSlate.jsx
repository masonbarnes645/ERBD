import { Box, Paper } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import Grid from '@mui/material/Grid2';



const PortfolioSlate = ({ title, photos, id }) => {
    const imageUrl = photos
        ? `http://localhost:5555/${photos[0]?.file_path}`
        : null;


    return (
        <Link to={`/portfolios/${id}`}>
            <Box sx={{ marginY: '3rem', position: 'relative' }} className="fart">
                {photos ? (
                    <>
                        <img
                            src={imageUrl}
                            alt={title}
                            loading="lazy"
                            style={{ height: '30rem', width: '40rem', objectFit: 'cover', borderStyle: 'solid' }}

                        />
                    </>

                ) : (
                    <p>No image available</p>
                )}
            </Box >
        </Link>

    )
}

export default PortfolioSlate