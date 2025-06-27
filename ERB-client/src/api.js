import toast from "react-hot-toast"

const API_URL = "/api/v1"

// Products
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
export const fetchProductById = async (productId) => {
    try {
        const response = await fetch(`${API_URL}/products/${productId}`)
        if (!response.ok) {
            throw new Error("Failed to retrieve product")

        }
        const data = await response.json()
        return data
    }
    catch (errObj) {
        toast.error(errObj.error)
    }
}
export const postProduct = async (productData) => {
    try {
        const response = await fetch(`${API_URL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        })
        if (!response.ok) {
            throw new Error("Post Failed")
        }
    }
    catch (errObj) {
        toast.error(errObj.error)

    }
}
export const patchProduct = async (productData, productId) => {
    try {
        const response = await fetch(`${API_URL}/products/${productId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData),
        })
        if (!response.ok) {
            throw new Error("Patch Failed")
        }
    }
    catch (errorObj) {
        toast.error(errorObj.error)
    }
}


// Portfolio
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
export const fetchPortfolioById = async (portfolioId) => {
    try {
        const response = await fetch(`${API_URL}/portfolios/${portfolioId}`)
        if (!response.ok) {
            throw new Error("Failed to retrieve portfolio")

        }
        const data = await response.json()
        return data
    }
    catch (errObj) {
        toast.error(errObj.error)
    }
}
export const postPortfolio = async (portfolioData) => {
    try {
        const response = await fetch(`${API_URL}/portfolios`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(portfolioData),
        })
        if (!response.ok) {
            throw new Error("Post Failed")
        }
    }
    catch (errObj) {
        toast.error(errObj.error)

    }
}
export const patchPortfolio = async (portfolioData, portfolioId) => {
    try {
        const response = await fetch(`${API_URL}/portfolios/${portfolioId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(portfolioData),
        })
        if (!response.ok) {
            throw new Error("Patch Failed")
        }
    }
    catch (errorObj) {
        toast.error(errorObj.error)
    }
}



// Tags


export const fetchTags = async () => {
    try {
        const response = await fetch(`${API_URL}/tags`);
        if (!response.ok) {
            throw new Error("Failed to fetch tags");
        }
        const data = await response.json();
        return data;
    }
    catch (errObj) {
        toast.error(errObj.error);
    }
}

// inquiries

export const postInquiry = async (inquiryData) => {
    try {
        const response = await fetch(`${API_URL}/inquiries`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inquiryData),
        },)
        if (!response.ok) {
            throw new Error("Post Failed")
        }
        toast.success("Email Sent")
    }
    catch (errObj) {
        toast.error(errObj.error)

    }
}

// photos

export const postPhoto = async (photoData) => {
    try {
        const response = await fetch(`${API_URL}/photos`, {
            method: "POST",
            body: photoData,  
        });

        if (!response.ok) {
            toast.error('upload failed');
            return
        }
        
        toast.success("uploaded")
        const result = await response.json();
        return result;
    } catch (err) {
        console.error("Error during photo upload:", err.message);
    }
};

// Account

export const login = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method:'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
        if (!response.ok){
            toast.error('login failed')
            
        }
        const result = await response.json()
        return result
        

    } catch(err) {
        console.error("Error during login:", err.message)
    }
}




