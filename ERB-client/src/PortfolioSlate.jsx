import { Paper } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Grid from '@mui/material/Grid2';



const PortfolioSlate = ({ title, photos }) => {
    const imageUrl = photos
        ? `http://localhost:5555/${photos[0]?.file_path}`
        : null;


    return (
        <Paper elevation={10}>
            <Grid container>
                {photos ? (
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

        </Paper>
    )
}

export default PortfolioSlate