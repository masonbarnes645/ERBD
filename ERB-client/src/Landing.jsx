import { Link } from "react-router-dom"

const Landing = () =>
{


    return(

        <div>
            <img src="src/assets/Header_logo.png" alt="header" />
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