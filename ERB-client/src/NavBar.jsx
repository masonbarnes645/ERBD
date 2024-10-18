import { useNavigate } from "react-router-dom"



const NavBar = () => {
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={() => navigate("/")}> Home </button>
            <button onClick={() => navigate("/products")}> Products </button>
            <button onClick={() => navigate("/portfolios")}> Portfolio </button>
        </div>
    )
}

export default NavBar