
import { useContext } from "react"
import { UserContext } from "./usercontext"
import toast from "react-hot-toast"

const Login = () => {
    const { setUser } = useContext(UserContext)

    const handleSubmit = (formData) => {
        fetch("http://127.0.0.1:5555/login",{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                username: formData.username,
                password: formData.password,
            })
        })
        .then((res) => {
            if (res.ok){
                res.json().then((data) =>{
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
        .catch((errObj) =>{
            toast.error(errObj.error)
        })


     }
    return (
        <form onSubmit={() => handleSubmit}>
            <label>
                username: <input type="text" username="username" />
                password: <input type="text" password="password" />
            </label>
            <button type="submit" >Submit</button>

        </form>
    )
}

export default Login