import { useEffect, useState } from "react";
import { fetchTags, postPhoto, postPortfolio, postProduct } from "./api";
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, Navigate, useNavigate, useOutletContext } from "react-router-dom";
import { Box } from "@mui/material";

const productSchema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    description: yup.string(),
    price: yup.number().required("Price is Required").positive("Price must be a positive number")
});

const portfolioSchema = yup.object().shape({
    title: yup.string().required("Title is Required"),
    description: yup.string()
});

const PostForms = () => {
    const [productFormOpen, setProductFormOpen] = useState(false);
    const [portfolioFormOpen, setPortfolioFormOpen] = useState(false);
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [fileInput, setFileInput] = useState(null);
    
    const { products } = useOutletContext()
    const navigate = useNavigate()
    
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
            photoForm.append('owner_id', products?.length + 1);
            await postProduct(formWithTags);
            await postPhoto(photoForm);
            navigate(0)
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
        <Box display={'flex'} color={'white'}>
            <Box sx={{ paddingTop: 20, display: 'flex', flexDirection: 'column', maxWidth: '10rem' }}>
                <button onClick={toggleForm} name="product">Product</button>
                <button onClick={toggleForm} name="portfolio">Portfolio</button>
                <Link to={'/control-photo'}>
                    <button> Add photos</button>
                </Link>

                {productFormOpen && (
                    <Formik
                        initialValues={{ name: "", description: "", price: "" }}
                        validationSchema={productSchema}
                        onSubmit={handleSubmitProduct}
                    >
                        {({ isSubmitting }) => (
                            <Box sx={{ bgcolor: 'black', display: 'flex', width: '40rem' }}>
                                <Form>
                                    <label>
                                        Name:
                                        <Field type="text" name="name" />
                                        <ErrorMessage name="name" component="div" />
                                    </label>
                                    <br />
                                    <label>
                                        Description:
                                        <Field type="text" name="description" />
                                        <ErrorMessage name="description" component="div" />
                                    </label>
                                    <br />
                                    <label>
                                        Price:
                                        <Field type="number" name="price" />
                                        <ErrorMessage name="price" component="div" />
                                    </label>
                                    <br />
                                    <label>
                                        Main Image:
                                        <input type="file" name="image" onChange={handleFileChange} />
                                    </label>
                                    <br />
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
                                    <br />
                                    <button type="submit" disabled={isSubmitting}>Submit Product</button>
                                </Form>
                            </Box>
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
                            <Box sx={{ bgcolor: 'black', display: 'flex', width: '40rem' }}>
                                <Form>
                                    <label>
                                        Title:
                                        <Field type="text" name="title" />
                                        <ErrorMessage name="title" component="div" />
                                    </label>
                                    <br />
                                    <label>
                                        Description:
                                        <Field type="text" name="description" />
                                        <ErrorMessage name="description" component="div" />
                                    </label>
                                    <br />
                                    <button type="submit" disabled={isSubmitting}>Submit Portfolio</button>
                                </Form>
                            </Box>
                        )}
                    </Formik>
                )}
            </Box>
        </Box>
    );
};

export default PostForms;
