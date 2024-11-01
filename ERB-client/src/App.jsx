import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import { UserProvider } from "./usercontext";
import NavBar from "./NavBar";

const App = () => {

  return (

    <UserProvider>
      <NavBar/>
        <Outlet />
      <Toaster />
    </UserProvider>

  )

}

export default App;