// list products, add to products, delete products, analytics?

import { useEffect, useState } from "react"
import { fetchTags, postPhoto, postPortfolio, postProduct } from "./api";

// for scrolling container, css = overflow-y
// conditional post for portfolio or product


const ControlPanel = () => {
    const [postFormData, setPostFormData] = useState({});
    const [productFormOpen, setProductFormOpen] = useState(false)
    const [portfolioFormOpen, setPortfolioFormOpen] = useState(false)
    const [tags, setTags] = useState({})
    const [selectedTags, setSelectedTags] = useState([])
    const [photo, setPhoto] = useState()


    const handleCheckboxChange = (e) => {
        const checkbox = e.target
        console.log(checkbox.value)
        if (checkbox.checked) { setSelectedTags([...selectedTags, checkbox.value]) }
        else { setSelectedTags(selectedTags.filter((tag) => tag.id !== checkbox.value)) }

    }

    const handleChange = (e) => {
        const { name, value, } = e.target;
        {
            setPostFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };
    const handlePhotoChange = (e) => {
        const { name, value } = e.target;
        setPhoto((prevPhoto) => ({
            ...prevPhoto, 
            [name]: value 
        }));
    };

    const toggleForm = (e) => {
        console.log(e.target.name);

        if (e.target.name === "product") {
            setProductFormOpen((current) => !current);
            setPortfolioFormOpen(false);
        } else if (e.target.name === "portfolio") {
            setPortfolioFormOpen((current) => !current);
            setProductFormOpen(false);
        }
    };

    const handleSubmitProduct = async (postFormData, e) => {
        e.preventDefault()
        const formWithTags = {
            ...postFormData,
            tags: selectedTags
        };

        await postPhoto(photo)
        await postProduct(formWithTags)
    }


    const handleSubmitPortfolio = async (postFormData, e) => {
        e.preventDefault()
        await postPortfolio(postFormData)
    }

    useEffect(() => {
        const loadTags = async () => {
            try {
                const data = await fetchTags();
                setTags(data);
            } catch (err) {
                setError(err.message);
            }
        };

        loadTags();
        console.log(tags)
    }, []);



    const productForm = (productFormOpen ? <form onSubmit={(e) => handleSubmitProduct(postFormData, e)}>
        <label>
            name: <input type="text" name="name" value={postFormData.title} onChange={handleChange} />
            description: <input type="text" name="description" value={postFormData.description} onChange={handleChange} />
            price: <input type="integer" name="price" value={postFormData.price} onChange={handleChange} />
            image: <input type="file" name="photo" onChange={handlePhotoChange} />
        </label>
        <div>
            {tags.map((tag) => (
                <label key={tag.id}>
                    {tag.name}
                    <input type="checkbox" value={tag.id} onChange={handleCheckboxChange} />
                </label>
            ))}

        </div>
        <button type="submit">Submit</button>
    </form> :
        <></>)



    const portfolioForm = (portfolioFormOpen ? <form onSubmit={(e) => handleSubmitPortfolio(postFormData, e)}>
        <label>
            title: <input type="text" name="title" value={postFormData.title} onChange={handleChange} />
            description: <input type="text" name="description" value={postFormData.description} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
    </form> :
        <></>)

    //map tags as checkboxes to a scrollable container






    return (
        <div>
            <h4>{productForm}</h4>
            <h4>{portfolioForm}</h4>
            <button onClick={toggleForm} name="product">Product</button>
            <button onClick={toggleForm} name="portfolio">Portfolio</button>

        </div>
    )
}

export default ControlPanel