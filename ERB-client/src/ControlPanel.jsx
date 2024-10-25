// list products, add to products, delete products, analytics?

import { useEffect, useRef, useState } from "react"
import { fetchTags, postPhoto, postPortfolio, postProduct } from "./api";
import * as yup from 'yup';



const inqSchema = yup.object().shape({
    firstname: yup.string().required("First Name is Required"),
    lastname: yup.string().required("Last Name is required"),
    email: yup.email().required("Email is Required"),
    subject: yup.string().required("Subject is Required"),
    message: yup.string().required("Message is Required")
})


const ControlPanel = () => {
    const [postFormData, setPostFormData] = useState({});
    const [productFormOpen, setProductFormOpen] = useState(false)
    const [portfolioFormOpen, setPortfolioFormOpen] = useState(false)
    const [tags, setTags] = useState({})
    const [selectedTags, setSelectedTags] = useState([])
    const [fileInput, setFileInput] = useState() 



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

    const handleFileChange = (e) =>{
        setFileInput(e.target.files[0])

    }

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
        const photoForm = new FormData()
        photoForm.append('image', fileInput)
        photoForm.append('owner_type', 'product')
        photoForm.append('owner_id', 1)
        try {
            await postProduct(formWithTags);
            await postPhoto(photoForm);
        } catch (error) {
            console.error('Error posting product or photo:', error);
    }
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
    }, []);



    const productForm = (productFormOpen ? <form onSubmit={(e) => handleSubmitProduct(postFormData, e)} >
        <label>
            name: <input type="text" name="name" value={postFormData.title} onChange={handleChange} />
            description: <input type="text" name="description" value={postFormData.description} onChange={handleChange} />
            price: <input type="integer" name="price" value={postFormData.price} onChange={handleChange} />
            image: <input type="file" name="image" onChange={handleFileChange} />
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
        </form>
        :

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