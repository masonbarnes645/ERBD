import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import { UserProvider } from "./usercontext";

const App = () => {

  return (

    <UserProvider>
      <div>
        <Outlet />
      </div>
      <Toaster />
    </UserProvider>

  )

}

export default App;