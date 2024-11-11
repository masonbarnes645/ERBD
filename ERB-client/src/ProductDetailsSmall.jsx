
import { Box } from '@mui/material';
import { useState } from 'react';


const ProductDetailsSmall = ({ product }) => {
    const [mainPhotoId, setMainPhotoId] = useState(0)

    const handleClick = (index) => {
        setMainPhotoId(index)
    }
    return (
        <Box sx={{ marginTop: '3rem' }}>
            <Box display={'flex'} justifyContent={'center'} ><h4 className='zen-font'>{product.name}</h4></Box>
            <Box display={'flex'}>
                <Box sx={{ width: '90%', marginX: '5%' }}>
                    {product.photos && product.photos[mainPhotoId] && (
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={`http://localhost:5555/${product.photos[mainPhotoId].file_path}`} />
                    )}
                </Box>
            </Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-around'} marginTop={'1rem'}>
                {product.photos?.slice(0, 3).map((photo, index) => (<Box key={photo.id} sx={{ borderStyle: 'solid' }}> <img style={{ height: 'auto', width: '60px' }} src={`http://localhost:5555/${photo.file_path}`} onClick={() => handleClick(index)} /> </Box>))}
            </Box>
            <Box width={'90%'} marginX={'5%'} marginTop={'.5rem'}>
                ${product.price}
            </Box>
            <Box  width={'90%'} marginX={'5%'}>
                <h3 className='zen-font'>{product.description}</h3>
            </Box>
        </Box>
    )
}


export default ProductDetailsSmall