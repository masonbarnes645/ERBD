


const ProductCard = ({ name, description, price, tags, photos, product, id }) => {
    const imageUrl = photos && photos.file_path
        ? `http://localhost:5555/${photos.file_path}`
        : null;
    
        return (
        <div>
            <h1>
                {/* {name}
                {description}
                {price}
                {tags} */}
                {/* {photos} */}
                {photos && photos.file_path[0] ? (
                    <>
                        <img
                            src={imageUrl}
                            alt={name}
                            style={{ width: '200px', height: 'auto' }}
                        />
                        <p>{photos.file_path} </p>
                    </>

                ) : (
                    <p>No image available</p>
                )}
            </h1>
        </div>
    )
}

export default ProductCard