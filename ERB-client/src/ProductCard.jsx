import { Box, Paper, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Link } from "react-router-dom";
import './App.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';




const ProductCard = ({ name, description, price, tags, photos, product, id }) => {
    const imageUrl = photos
        ? `http://localhost:5555/${photos[0]?.file_path}`
        : null;

    

    return (
        <Link to={`/products/${id}`} >
            <Paper elevation={10} sx={{ maxWidth: '30rem', maxHeight: '30rem', paddingY: '1rem', paddingX: { xs: '1rem', med: 0 }, color:'#36454F' }}>
                <Box alignItems={'center'} textAlign={'center'}>
                    <h3 className="zen-font">{name}</h3>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {photos ? (
                        <>
                            <img
                                src={imageUrl}
                                alt={name}
                                loading="lazy"
                                style={{ objectFit: 'cover', width: '15rem', height: '15rem' }}
                            />
                        </>
                    ) : (
                        <p>No image available</p>
                    )}
                </Box>
                <Box display={'flex'} className='zen-font'  justifyContent={'space-between'} alignItems={'center'} >
                    <h3>${price}</h3>
                    <Box className="details-link">
                    <h3> Details <ChevronRightIcon style={{position:'relative', top:'6px'}}/></h3>
                    </Box>
                </Box>

            </Paper >
        </Link>
    )
}

export default ProductCard

