import { Paper, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Link } from "react-router-dom";




const ProductCard = ({ name, description, price, tags, photos, product, id }) => {
    const imageUrl = photos && photos[0].file_path
        ? `http://localhost:5555/${photos[0].file_path}`
        : null;
        console.log(photos)

    return (
        <Paper elevation={10}>
            <Grid container paddingTop={4}>
                <Grid item size={12} paddingX={5}>
                    {photos && photos[0].file_path[0] ? (
                        <>
                            <img
                                src={imageUrl}
                                alt={name}
                                style={{ width: '200px', height: '150px' }}
                                loading="lazy"
                                
                            />
                        </>

                    ) : (
                        <p>No image available</p>
                    )}
                </Grid>
                <Grid item size={8} marginLeft={4} paddingY={2}>
                    <Typography variant="h4" component='h2'> {name} </Typography>
                <Link to={`/products/${id}`}>
                    <Typography variant="body2" component='p'> View Details</Typography>
                </Link>
            </Grid>

        </Grid>
        </Paper >
    )
}

export default ProductCard

