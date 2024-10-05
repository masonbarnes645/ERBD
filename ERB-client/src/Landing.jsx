import { Link } from "react-router-dom"

const Landing = () =>
{


    return(

        <div>
            <Link to={"/portfolios"}>
                <button>Portfolio</button>
            </Link>
            <Link to={"/products"}>
                <button>View Products</button>
            </Link>
            <Link to={"/about-us"}>
                <button>About EBD</button>
            </Link>
        </div>
    )
}

export default Landing