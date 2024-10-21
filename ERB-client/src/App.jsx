import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import { UserProvider } from "./usercontext";
import NavBar from "./NavBar";

const App = () => {

  return (

    <UserProvider>
      <NavBar/>
      <div className="base">
        <Outlet />
      </div>
      <Toaster />
    </UserProvider>

  )

}

export default App;