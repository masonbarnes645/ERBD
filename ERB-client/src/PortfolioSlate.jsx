import { Box, Paper } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import Grid from '@mui/material/Grid2';



const PortfolioSlate = ({ title, photos, id }) => {
    const imageUrl = photos
        ? `http://localhost:5555/${photos[0]?.file_path}`
        : null;


    return (
        <Link to={`/portfolios/${id}`}>
            <Box sx={{ marginY: '1rem', position: 'relative' }} className="fart">
                {photos ? (
                    <>
                        <img
                            src={imageUrl}
                            alt={title}
                            loading="lazy"
                            style={{ height: '30rem', width: '40rem', objectFit: 'cover', borderStyle: 'solid', borderColor: '#36454F'}}

                        />
                    </>

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