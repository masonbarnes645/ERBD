
import { useContext, useState } from "react"
import { UserContext } from "./usercontext"
import toast from "react-hot-toast"

const Login = () => {
    const { setUser } = useContext(UserContext)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://127.0.0.1:5555/login", {
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
    <form onSubmit={(e) => handleSubmit(e)}>
        <label>
            username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            password: <input type="password"value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Submit</button>

    </form>
)
}

export default Login