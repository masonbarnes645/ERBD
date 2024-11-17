
import { useContext, useState } from "react"
import { UserContext } from "./usercontext"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/material"

const Login = () => {
    const { setUser } = useContext(UserContext)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/api/v1/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
        })
        .then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    setUser(data)
                    navigate("/control")
                    toast.success("Logged In")
                })

            }
            else {
                return res.json().then((errObj) => {
                    toast.error(errObj.error);
                })
            }
        })
    .catch((errObj) => {
        toast.error(errObj.error)
    })
    

     }
return (
    <Box paddingTop={'30rem'} bgcolor={'black'}>
    <form onSubmit={(e) => handleSubmit(e)} >
        <label>
            username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            password: <input type="password"value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
    </form>
    </Box>
)
}

export default Login