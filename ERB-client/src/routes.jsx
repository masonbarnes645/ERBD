import App from "./App";
import Landing from "./Landing";
import { createBrowserRouter } from "react-router-dom";
import Portfolio from "./Portfolio";
import Products from "./Products";
import About from "./About";
import ProductDetails from "./ProductDetails";
import PortfolioDetails from "./PortfolioDetails";
import Login from "./Login";

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
                    path: "/about-us",
                    element: <About />
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
                    path: "/login",
                    element: <Login />
                }
            ]
        }
    ]
)


