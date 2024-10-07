import toast from "react-hot-toast"

const API_URL = "http://localhost:5555/"

export const fetchProducts = async () => {
    try {
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        return data;
    } 
    catch (errObj) {
        toast.error(errObj.error);  
    }
}


export const fetchPortfolios = async () => {
    try {
        const response = await fetch(`${API_URL}/portfolios`);
        if (!response.ok) {
            throw new Error("Failed to fetch portfolios");
        }
        const data = await response.json();
        return data;
    } 
    catch (errObj) {
        toast.error(errObj.error);  
    }
}

export const deleteProduct = async (productId) => {
    try { 
        const response = await fetch(`${API_URL}/products/${productId}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Failed to delete product");
        }

        toast.success("Product deleted successfully");
    } 
    catch (errObj) {
        toast.error(errObj.error);
    }
}

export const deletePortfolio = async (portfolioId) => {
    try { 
        const response = await fetch(`${API_URL}/portfolios/${portfolioId}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Failed to delete product");
        }

        toast.success("Product deleted successfully");
    } 
    catch (errObj) {
        toast.error(errObj.error);
    }
}