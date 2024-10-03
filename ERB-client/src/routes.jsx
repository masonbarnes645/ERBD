import App from "./App";
import Landing from "./Landing";
import { createBrowserRouter } from "react-router-dom";

export const router =  createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children:[
                {
                    index: true,
                    element: <Landing />,
                }
            ]
        }
    ]
)


