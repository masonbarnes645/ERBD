import { Box, Typography } from '@mui/material';
import { useState } from 'react';


const ProductDetailsSmall = ({ product }) => {
    const [mainPhotoId, setMainPhotoId] = useState(0)

    const handleClick = (index) => {
        setMainPhotoId(index)
    }
    return (
        <Box width={'100%'} marginTop={'2.8rem'} >
            <Box display={'flex'} justifyContent={'center'} ><h4 className='zen-font'>{product.name}</h4></Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'100%'} overflow={'hidden'}>
                <Box sx={{ objectFit: 'cover', justifyContent: 'center' }}>
                    {product.photos && product.photos[mainPhotoId] && (
                        <img style={{maxWidth:'100%'}} src={`api/v1/${product.photos[mainPhotoId].file_path}`} />
                    )}
                </Box>

                <Box display={'flex'} flexDirection={'row'} justifyContent={'space-around'} marginTop={'1rem'}>
                    {product.photos?.slice(0, 2).map((photo, index) => (<Box key={photo.id} sx={{ borderStyle: 'solid' }}> <img style={{ height: 'auto', width: '60px' }} src={`api/v1/${photo.file_path}`} onClick={() => handleClick(index)} /> </Box>))}
                </Box>
                <Box >
                    ${product.price}
                </Box>
                <Box sx={{ wordWrap:'break-word', width:'310px'}}>
                    <Typography  variant='body1'>{product.description}</Typography>
                </Box>
            </Box>
        </Box>

    )
}


export default ProductDetailsSmall