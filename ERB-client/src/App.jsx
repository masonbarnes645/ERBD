import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast"

const App = () => {

  return(
   <>
    <div>
      <Outlet />
    </div>
    <Toaster />
    </> 
  )

}

export default App;