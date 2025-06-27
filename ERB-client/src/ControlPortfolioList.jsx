import { deletePortfolio } from "./api";
import { Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { UserContext } from "./usercontext"
import { useContext } from "react";



const CPoL = () => {
    const { portfolios } = useOutletContext()
    const { user } = useContext(UserContext);
    
    const handleDelete = (id) => {
        deletePortfolio(id)
    }
    return (
        user ?
        <Box sx={{ bgcolor: 'black', overflow: 'scroll', overflowX: 'hidden', color:'white' }}>
            <h4> Portfolios </h4>
            <ul>
                {portfolios?.map((portfolio) => (
                    <li key={portfolio.id}> <button onClick={() => handleDelete(portfolio.id)} className="control-delete-button">x</button>{portfolio.title}</li>
                ))}
            </ul>
        </Box>
        : navigate('/')

    );

}


export default CPoL

