import { Box } from "@mui/material"



const ProductDetailsLarge = () => {

    return
    (
        <Box sx={{ marginTop: '3rem' }}>
            <Box display={'flex'} justifyContent={'center'}><h1>{product.name}</h1></Box>
            <Box display={'flex'}>
                <Box sx={{ borderStyle: 'solid', width: '45rem', height: '40rem' }}>
                    {product.photos && product.photos[mainPhotoId] && (
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={`http://localhost:5555/${product.photos[mainPhotoId].file_path}`} />
                    )}
                </Box>
                <Box display={'flex'} flexDirection={'column'}>
                    {product.photos?.map((photo, index) => (<Box key={photo.id}> <img style={{ height: '100px', width: '100px' }} src={`http://localhost:5555/${photo.file_path}`} onClick={() => handleClick(index)} /> </Box>))}
                </Box>
            </Box>
            <Box marginTop={'2.3rem'}>
                <h3>{product.description}</h3>
            </Box>
        </Box>
    )
}

export default ProductDetailsLarge