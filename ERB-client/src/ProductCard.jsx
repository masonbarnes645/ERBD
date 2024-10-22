


const ProductCard = ({ name, description, price, tags, photos, product, id }) => {

    return (
        <div>
            <h1>
                {/* {name}
                {description}
                {price}
                {tags} */}
                {/* {photos} */}
                {photos && photos.file_path ? (
                    <>
                        <img
                            src={photos.file_path}
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