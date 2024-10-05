import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import { UserProvider } from "./usercontext";

const App = () => {

  return(
   <div>
   <UserProvider>
    <div>
      <Outlet />
    </div>
    <Toaster />
    </UserProvider> 
    </div>
  )

}

export default App;