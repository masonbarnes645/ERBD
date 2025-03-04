import App from "./App";
import Landing from "./Landing";
import { createBrowserRouter } from "react-router-dom";
import Portfolio from "./Portfolio";
import Products from "./Products";
import Contact from "./Contact"
import ProductDetails from "./ProductDetails";
import PortfolioDetails from "./PortfolioDetails";
import Login from "./Login";
import ControlPanel from "./ControlPanel";
import ControlPhoto from "./ControlPhoto";
import About from "./AboutMobile";
import EditPortfolio from "./EditPortfolio";

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
                    path: "/portfolios",
                    element: <Portfolio />
                },
                {
                    path: "/products",
                    element: <Products />
                },
                {
                    path: "/contact-us",
                    element: <Contact />
                },
                {
                    path: "/portfolios/:portfolioId",
                    element: <PortfolioDetails />
                },
                {
                    path: "/products/:productId",
                    element: <ProductDetails />
                },
                {
                    path: "/products/edit/:productId",
                    element: <EditPortfolio />
                },
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/control",
                    element: <ControlPanel />
                },
                {
                    path: "/control-photo",
                    element: <ControlPhoto />
                },
                {
                    path: "/about",
                    element: <About />
                }
            ]
        }
    ]
)


