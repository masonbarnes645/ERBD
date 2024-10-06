import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


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


    const handleDelete = () =>{
        fetch(`http://127.0.0.1:5555/portfolios/${portfolioId}`, {
            method: "DELETE",
            headers:{}
        })
        .then((res) =>{
            if (res.ok){

                navigate("/")
            }
        })

    }

    return(
        <div>
            {portfolio.title}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )

}

export default PortfolioDetails