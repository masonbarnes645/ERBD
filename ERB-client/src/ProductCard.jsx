


const ProductCard = ({ name, description, price, tags, photos, product, id }) => {
    // console.log(photos.file_path)
    return (
        <div>
            <h1>
                {name}
                {description}
                {price}
                {tags}
                {/* {photos} */}
                {photos && photos.file_path ? (
                    <img
                        src={photos.file_path}
                        alt={name}
                        style={{ width: '200px', height: 'auto' }}
                    />
                ) : (
                    <p>No image available</p>
                )}
            </h1>
        </div>
    )
}

export default ProductCard