// list products, add to products, delete products, analytics?

import { useState } from "react"

// for scrolling container, css = overflow-y
// conditional post for portfolio or product


const ControlPanel = () => {
    const [postFormData, setPostFormData] = useState({
        "title": "",
        "description": ""
    });
    const [productFormOpen, setProductFormOpen] = useState()
    const [portfolioFormOpen, setPortfolioFormOpen] = useState()

    // setPostFormData({
    //     "title": "example",
    //     "description": "test"

    // })

    const handleChange = (e) =>{
        const {name, value} = e.target
        setPostFormData((prevData) => ({
            ...prevData,
            [name]: value
        })
    )
    }


    
    
    
    return(
        <div>
            <h4>control</h4>
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