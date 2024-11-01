import { useEffect, useState } from "react";
import { fetchTags, postPhoto, postPortfolio, postProduct } from "./api";
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";

const productSchema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    description: yup.string(),
    price: yup.number().required("Price is Required").positive("Price must be a positive number")
});

const portfolioSchema = yup.object().shape({
    title: yup.string().required("Title is Required"),
    description: yup.string()
});

const ControlPanel = () => {
    const [productFormOpen, setProductFormOpen] = useState(false);
    const [portfolioFormOpen, setPortfolioFormOpen] = useState(false);
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [fileInput, setFileInput] = useState(null);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setSelectedTags(prev =>
            checked ? [...prev, value] : prev.filter(tagId => tagId !== value)
        );
    };

    const handleFileChange = (e) => {
        setFileInput(e.target.files[0]);
    };

    const toggleForm = (e) => {
        const { name } = e.target;
        if (name === "product") {
            setProductFormOpen(prev => !prev);
            setPortfolioFormOpen(false);
        } else if (name === "portfolio") {
            setPortfolioFormOpen(prev => !prev);
            setProductFormOpen(false);
        }
    };

    const handleSubmitProduct = async (values, { setSubmitting, resetForm }) => {
        try {
            const formWithTags = { ...values, tags: selectedTags };
            const photoForm = new FormData();
            photoForm.append('image', fileInput);
            photoForm.append('owner_type', 'product');
            photoForm.append('owner_id', 1);
            await postProduct(formWithTags);
            await postPhoto(photoForm);
            resetForm();
        } catch (error) {
            console.error('Error posting product or photo:', error);
        } finally {
            setSubmitting(false);
        }
    };

    const handleSubmitPortfolio = async (values, { setSubmitting, resetForm }) => {
        try {
            await postPortfolio(values);
            resetForm();
        } catch (error) {
            console.error('Error posting portfolio:', error);
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        const loadTags = async () => {
            try {
                const data = await fetchTags();
                setTags(data);
            } catch (err) {
                console.error("Error fetching tags:", err);
            }
        };
        loadTags();
    }, []);

    return (
        <div>
            <button onClick={toggleForm} name="product">Product</button>
            <button onClick={toggleForm} name="portfolio">Portfolio</button>
            <Link to={'/control-photo'}>
                <button> Add photos to portfolio</button>
            </Link>

            {productFormOpen && (
                <Formik
                    initialValues={{ name: "", description: "", price: "" }}
                    validationSchema={productSchema}
                    onSubmit={handleSubmitProduct}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <label>
                                Name:
                                <Field type="text" name="name" />
                                <ErrorMessage name="name" component="div" />
                            </label>
                            <label>
                                Description:
                                <Field type="text" name="description" />
                                <ErrorMessage name="description" component="div" />
                            </label>
                            <label>
                                Price:
                                <Field type="number" name="price" />
                                <ErrorMessage name="price" component="div" />
                            </label>
                            <label>
                                Image:
                                <input type="file" name="image" onChange={handleFileChange} />
                            </label>
                            <div>
                                {tags.map(tag => (
                                    <label key={tag.id}>
                                        {tag.name}
                                        <input
                                            type="checkbox"
                                            value={tag.id}
                                            onChange={handleCheckboxChange}
                                        />
                                    </label>
                                ))}
                            </div>
                            <button type="submit" disabled={isSubmitting}>Submit Product</button>
                        </Form>
                    )}
                </Formik>
            )}

            {portfolioFormOpen && (
                <Formik
                    initialValues={{ title: "", description: "" }}
                    validationSchema={portfolioSchema}
                    onSubmit={handleSubmitPortfolio}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <label>
                                Title:
                                <Field type="text" name="title" />
                                <ErrorMessage name="title" component="div" />
                            </label>
                            <label>
                                Description:
                                <Field type="text" name="description" />
                                <ErrorMessage name="description" component="div" />
                            </label>
                            <button type="submit" disabled={isSubmitting}>Submit Portfolio</button>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
};

export default ControlPanel;
