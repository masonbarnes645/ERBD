import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const Portfolio = () =>{
    const [portfolios, setPortfolios] = useState()

    useEffect(() => {
        fetch("http://127.0.0.1:5555/portfolios")
            .then((res) => {
                if (res.ok) {
                    res.json().then(setPortfolios)
                }
                else {
                    res.json().then((errObj) => toast.error(errObj.error))
                }
            })
            .catch((errObj) => toast.error(errObj.error))
    }, [])

    console.log(portfolios)
    return(
        <div>
            <h4>blow me</h4>
        </div>
    )
}

export default Portfolio