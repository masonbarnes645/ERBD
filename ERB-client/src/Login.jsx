
import { useContext, useState } from "react"
import { UserContext } from "./usercontext"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/material"
import { login } from "./api"

const Login = () => {
    const { setUser } = useContext(UserContext)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit =  async (e) => {
        e.preventDefault()
        const userData = await login(username, password);
        if (userData) {
            setUser(userData);
            navigate('/control');
            toast.success('Login Success');
        }
    }
    return (
        <Box paddingTop={'3rem'}>
            <form onSubmit={(e) => handleSubmit(e)} >
                <label style={{ color: 'black' }}>
                    Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </Box>
    )
}

export default Login