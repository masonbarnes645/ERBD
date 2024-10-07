import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import { deletePortfolio } from "./api"


const PortfolioDetails = () => {
    const { portfolioId } = useParams()
    const [portfolio, setPortfolio] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        fetch(`http://127.0.0.1:5555/portfolios/${portfolioId}`)
            .then((res) => {
                if (res.ok){
                    return res.json().then((data =>{
                        setPortfolio(data)
                    }))
                }
                else{
                    res.json().then((errObj) => toast.error(errObj.error))                  
                }
            })
            .catch((errObj) => toast.error(errObj.error))
    }, [])


    const handleDelete = async () => {
        await deletePortfolio(portfolioId)
        navigate("/")
    }

    return(
        <div>
            {portfolio.title}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )

}

export default PortfolioDetails