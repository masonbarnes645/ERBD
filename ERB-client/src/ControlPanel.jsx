// list products, add to products, delete products, analytics?

import { useState } from "react"

// for scrolling container, css = overflow-y
// conditional post for portfolio or product


const ControlPanel = () => {
    const [postFormData, setPostFormData] = useState({
        "title": "",
        "description": ""
    });
    const [productFormOpen, setProductFormOpen] = useState(false)
    const [portfolioFormOpen, setPortfolioFormOpen] = useState(false)


    const handleChange = (e) =>{
        const {name, value} = e.target
        setPostFormData((prevData) => ({
            ...prevData,
            [name]: value
        })
    )
    }

    const toggleForm = (e) =>{
        console.log(e.target.name)
        if(e.target.name == "product")
            setProductFormOpen((current) => (!current))
        else if (e.target.name == "portfolio")
            setPortfolioFormOpen((current) => (!current))


    }


    
    
    
    return(
        <div>
            <h4>control</h4>
            <button onClick={toggleForm} name="product">dfgfdgd</button>
            <button onClick={toggleForm} name="portfolio">dfgsssfdgd</button>
            <form onSubmit={(e) => handleSubmit(e)}>
        <label>
            title: <input type="text" name="title" value={postFormData.title} onChange={handleChange} />
            description: <input type="text" name="description" value={postFormData.description} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>

    </form>
        </div>
    )
}

export default ControlPanel