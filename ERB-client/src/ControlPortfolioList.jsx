import { deleteProduct } from "./api";
import { Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";


const CPoL = () => {
    const { portfolios } = useOutletContext()
    const handleDelete = (id) => {
        deleteProduct(id)

    }
    return (
        <Box sx={{ bgcolor: 'black', height: '15rem', overflow: 'scroll', width: '13rem', overflowX: 'hidden', color:'white' }}>
            <h4> Portfolios </h4>
            <ul>
                {portfolios?.map((portfolio) => (
                    <li key={portfolio.id}> <button onClick={() => handleDelete(portfolio.id)} className="control-delete-button">x</button>{portfolio.title}</li>
                ))}
            </ul>
        </Box>
    );

}

export default CPoL

