import App from "./App";
import Landing from "./Landing";
import { createBrowserRouter } from "react-router-dom";
import Portfolio from "./Portfolio";
import Products from "./Products";
import About from "./About";

export const router =  createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children:[
                {
                    index: true,
                    element: <Landing />,
                },
                {
                    path: "/portfolio",
                    element: <Portfolio />
                },
                {
                    path: "/products",
                    element: <Products />
                },
                {
                    path: "about-us",
                    element: <About />
                }
            ]
        }
    ]
)


