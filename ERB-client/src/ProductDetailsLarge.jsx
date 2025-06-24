import { Box } from "@mui/material"
import { useState } from "react"



const ProductDetailsLarge = ({ product }) => {
    const [mainPhotoId, setMainPhotoId] = useState(0)
    const handleClick = (index) => {
        setMainPhotoId(index)
    }
    return (
        <Box display={'flex'} justifyContent={'center'} marginTop={'5rem'}>
            <Box display={'flex'} flexDirection={'column'} paddingRight={'1rem'}>
                {product.photos?.slice(0, 6).map((photo, index) => (
                    <Box sx={{
                        height: { lg: '100px', md: '70px' },
                        width: { lg: '100px', md: '70px' },
                        padding: '.3rem',
                        borderColor: 'black',
                        borderStyle: product.photos[mainPhotoId].id === photo.id ? 'solid' : 'none'
                    }}
                        key={photo.id}> <img style={{ height: '100%', width: '100%' }} src={photo.file_url} onClick={() => handleClick(index)} />
                    </Box>))}
            </Box>
            <Box sx={{ width: { lg: '45rem', md: '36rem' }, height: { lg: '40rem', md: '32rem' } }}>
                {product.photos && product.photos[mainPhotoId] && (
                    <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={product.photos[mainPhotoId].file_url} />
                )}
            </Box>
            <Box className="zen-font" sx={{ color: 'black', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', top: '10px', width: '15%', paddingLeft: '1rem', wordWrap:'break-word' }}>
                <h2>{product.name}</h2>
                <h3>${product.price}</h3>
                <h3>{product.description}</h3>
            </Box>
        </Box>
    )
}

export default ProductDetailsLarge