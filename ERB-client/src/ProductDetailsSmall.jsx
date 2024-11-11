import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material';


const ProductDetailsSmall = ({ product }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <>
            <Box marginTop={'5rem'} display={'flex'} justifyContent={'center'}><h2>{product.name}</h2></Box>
            <Box marginX={'1rem'} marginTop={'1rem'}>
                <div className='slider-container' style={{ position: 'fixed' }} >
                    <Slider {...settings}>
                        {product.photos?.map((photo, index) => (<div key={photo.id}> <img style={{ height: 'auto', width: '90%' }} src={`http://localhost:5555/${photo.file_path}`} onClick={() => handleClick(index)} /> </div>))}
                    </Slider>
                </div>
            </Box>
        </> 
    )
}


export default ProductDetailsSmall