import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import { UserProvider } from "./usercontext";
import NavBar from "./NavBar";
import { Box } from "@mui/material";

const App = () => {

  return (

    <UserProvider>
      <Box
        sx={{
          minHeight: '100vh', 
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NavBar />
        <Box sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
        <Toaster />
      </Box>
    </UserProvider>
  )

}

export default App;