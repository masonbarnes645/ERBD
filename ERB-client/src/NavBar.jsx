import { useNavigate } from "react-router-dom"



const NavBar = () => {
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={() => navigate("/")}> Home </button>
        </div>
    )
}

export default NavBar