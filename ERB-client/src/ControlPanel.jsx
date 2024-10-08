// list products, add to products, delete products, analytics?

import { useState } from "react"
import { postPortfolio, postProduct } from "./api";

// for scrolling container, css = overflow-y
// conditional post for portfolio or product


const ControlPanel = () => {
    const [postFormData, setPostFormData] = useState({

    });
    const [productFormOpen, setProductFormOpen] = useState(false)
    const [portfolioFormOpen, setPortfolioFormOpen] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target
        setPostFormData((prevData) => ({
            ...prevData,
            [name]: value
        })
        )
    }

    const toggleForm = (e) => {
        console.log(e.target.name)
        if (e.target.name == "product")
            setProductFormOpen((current) => (!current))
        else if (e.target.name == "portfolio")
            setPortfolioFormOpen((current) => (!current))
    }

    const handleSubmitProduct = async (postFormData, e) =>{
        e.preventDefault()    
        await postProduct(postFormData)
    }
    const handleSubmitPortfolio = async (postFormData, e) =>{
        e.preventDefault()    
        await postPortfolio(postFormData)
    }
    const productForm = (productFormOpen ? <form onSubmit={(e) => handleSubmitProduct(postFormData, e)}>
        <label>
            name: <input type="text" name="name" value={postFormData.title} onChange={handleChange} />
            description: <input type="text" name="description" value={postFormData.description} onChange={handleChange} />
            price: <input type="integer" name="price" value={postFormData.price} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
    </form> : 
    <></>)
    
    const portfolioForm = (portfolioFormOpen ? <form onSubmit={(e) => handleSubmitPortfolio(postFormData, e)}>
        <label>
            title: <input type="text" name="name" value={postFormData.title} onChange={handleChange} />
            description: <input type="text" name="description" value={postFormData.description} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
    </form> : 
    <></>)
    
    
    



    return (
        <div>
            <h4>{productForm}</h4>
            <h4>{portfolioForm}</h4>
            <button onClick={toggleForm} name="product">dfgfdgd</button>
            <button onClick={toggleForm} name="portfolio">dfgsssfdgd</button>

        </div>
    )
}

export default ControlPanel